import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
      <h1>Feedbackk</h1>
        <Button variant="primary" href=" /auth/google"> Sign in with Google</Button>
      </div>
    );
  }
}
  
    

export default App;
