/* server.js nov 20 */
'use strict';
const log = console.log

const express = require('express')
const path = require('path')
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose')

// import the mongoose models
const { Item } = require('./models/item')
const { User } = require('./models/user')

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

// express-session for managing user sessions
const session = require('express-session')
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const multer = require("multer");
const crypto = require("crypto");

const mongoURI =
'mongodb://sharenear:statezero@cluster0-shard-00-00-sxm0g.mongodb.net:27017,cluster0-shard-00-01-sxm0g.mongodb.net:27017,cluster0-shard-00-02-sxm0g.mongodb.net:27017/UsersAPI?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

const conn = mongoose.createConnection(mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true });

let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("Connection Successful");
});

// Create storage engine
const storage = new GridFsStorage({
	url: mongoURI,
	file: (req, file) => {
	  return new Promise((resolve, reject) => {
		crypto.randomBytes(16, (err, buf) => {
		  if (err) {
			return reject(err);
		  }
		  const filename = file.originalname;
		  const fileInfo = {
			filename: filename,
			bucketName: "uploads"
		  };
		  resolve(fileInfo);
		});
	  });
	}
  });

  const upload = multer({ storage });

  app.post('/', upload.single('img'), (req, res, err) => {
	if (err) throw err
	res.status(201).send()
  })

app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(session({
    secret: 'oursecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000,
        httpOnly: true
    }
}));

app.get("/:filename", (req, res) => {
	gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
	  // Check if file
	  if (!file || file.length === 0) {
		return res.status(404).json({
		  err: "No file exists"
		});
	  }
  
	  // Check if image
	  if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
		// Read output to browser
		const readstream = gfs.createReadStream(file.filename);
		readstream.pipe(res);
	  } else {
		res.status(404).json({
		  err: "Not an image"
		});
	  }
	});
  });

// Our own express middleware to check for 
// an active user on the session cookie (indicating a logged in user.)
const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/dashboard'); // redirect to dashboard if logged in.
    } else {
        next(); // next() moves on to the route.
    }    
};

app.get('/users', (req, res) => {
	User.find().then((users) => {
		res.send({ users }) // can wrap in object if want to add more properties
	}, (error) => {
		res.status(500).send(error) // server error
	})
})

// A route to login and create a session
app.post('/users/login', (req, res) => {
	const email = req.body.email
    const password = req.body.password

    log(email, password)
    // Use the static method on the User model to find a user
    // by their email and password
	User.findByEmailPassword(email, password).then((user) => {
	    if (!user) {
	    	log('User not found')
            // res.redirect('/');
        } else {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            log('SESSION!')
            req.session.user = user._id;
            res.send({screen: 'logged in'});
        }
    }).catch((error) => {
    	log(400)
		// res.status(400).redirect('/');
    })
})

// A route to logout a user
app.get('/users/logout', (req, res) => {
	// Remove the session
	req.session.destroy((error) => {
		if (error) {
			res.status(500).send(error)
		} else {
			res.redirect('/')
		}
	})
})

// A route to check if a use is logged in on the session cookie
app.get('/users/check-session', (req, res) => {
	// Remove the session
	if (req.session.user) {
        res.send({screen: 'auth'});
    } else {
        res.redirect('/')
    } 
})

/*********************************************************/

/*** API Routes below ************************************/

app.get('/users/:id', (req, res) => {
	/// req.params has the wildcard parameters in the url, in this case, id.
	// log(req.params.id)
	const id = req.params.id

	// Good practise: Validate id immediately.
	if (!ObjectID.isValid(id)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
	}

	// Otherwise, findById
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send()  // could not find this student
		} else {
			/// sometimes we wrap returned object in another object:
			//res.send({student})   
			res.send(user)
		}
	}).catch((error) => {
		res.status(500).send()  // server error
	})

})



app.put('/users/:id', (req, res) => {
	console.log('enter');
	const id = req.params.id

	// get the updated name and year only from the request body.
	const { firstname, lastname, location, phonenumber, description } = req.body
	const body = { firstname, lastname, location, phonenumber, description }
	//const { firstname, lastname } = req.body
	//const body = { firstname, lastname }
	console.log(body);

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}
	
	// Update the student by their id.
	User.findByIdAndUpdate(id, {$set: body}, {new: true}).then((user) => {
		if (!user) {
			res.status(404).send()
		} else {
			res.send(user)
		}
	}).catch((error) => {
		res.status(400).send() // bad request for changing the student.
	})

})

app.put('/users/:userid/:itemid', (req, res) => {
	const userid = req.params.userid
	const itemid = req.params.itemid

	// get the updated name and year only from the request body.
	const available = req.body.isAvailable
	if (!ObjectID.isValid(userid)) {
		res.status(404).send()
	}

	User.findById(userid).then((user) => {
		console.log(user)

		if (!user) {
			res.status(404).send()  // could not find this student
		} else {

			const item = user.itemlist.id(itemid);

			if (!item) {
				res.status(404).send();
			}
			else {
				
				user.itemlist.id(itemid).isAvailable = available;
				user.save().then((result) => {
					res.send({user});
				}, (error) => {
					res.status(400).send(error);
				})
			}
		}
	}).catch((error) => {
		res.status(500).send()  // server error
	})

})


/** User routes below **/
// Set up a POST route to *create* a user of your web app (*not* a item).
app.post('/users', (req, res) => {
	log(req.body)

	// Create a new user
	const user = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		phonenumber: req.body.phonenumber,
		email: req.body.email,
		location: req.body.location,
		username: req.body.username,
		password: req.body.password,
		usertype: req.body.usertype,
		description: "Hi! Welcome to my profile"
	})

	// Save the user
	user.save().then((user) => {
		res.send(user)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

// Set up a POST route to *create* a item under a user of our web app.
app.post('/users/:id', (req, res) => {

	const item = {
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		duration: req.body.duration,
		location: req.body.location,
		image: null,
		renter: req.body.renter,
		isAvailable: true
	}
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		res.status(404).send();
	}
	User.findById(id).then(user => {
		if (!user) {
			res.status(400).send();
		}
		else {
			user.itemlist.push(item);
			user.save().then((result) => {
				res.send(user);
			}, (error) => {
				res.status(400).send(error);
			});
		}
	}).catch(error => {
			res.status(500).send(error);
		});
})

// DELETE route to delete a user by id.
app.delete('/users/:id', (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}

	// Delete a user by their id
	User.findByIdAndRemove(id).then((user) => {
		if (!user) {
			res.status(404).send()
		} else {   
			res.send(user)
		}
	}).catch((error) => {
		res.status(500).send() // server error, could not delete.
	})
})

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + '/my-app/build'));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + '/my-app/build/index.html');
})

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3001
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 







