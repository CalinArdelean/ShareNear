import React from 'react';

/* Component for the Student Form */
class LoginForm extends React.Component {

  render() {
    // console.log(this.props)

    return (
    	<div>
    	  <input name='userName' 
    	         value={ this.props.userName } 
    	         onChange={this.props.handleChange} 
    	         type="text" 
    	         placeholder="Username" />
    	         
          <input name='passWord' 
               value={ this.props.passWord } 
               onChange={this.props.handleChange} 
               type="text" 
               placeholder="Password" />

	      {/* <button onClick={ this.props.addStudent }>Add Student</button> */}
		</div>
	)
  }
}

export default LoginForm;

