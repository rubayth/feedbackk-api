import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => 
  <div>
    <h1>Feedbackk</h1>
    <Button variant="primary" href=" /auth/google"> Sign in with Google</Button>
  </div>

  
  



class App extends Component {
  render(){
    return(
      <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}
  
    
export default App;
