import React from 'react';
import Home from './Home';
import User from './User';
import { BrowserRouter as  Link, Route, Router} from 'react-router-dom';
//import './style.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User}/>
      </div>
    )
  }
}

export default App;
