import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Class to test the app and make sure it can render without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
