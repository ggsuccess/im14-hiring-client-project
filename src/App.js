import React from 'react';
import Home from './Home';
import User from './User';
import { BrowserRouter as  Link, Route, Router} from 'react-router-dom';
//import './style.css'

class App extends React.Component{
  // componentDidMount(){
  //   // console.log('componentdidmount동작?')
  //   fetch('https://koreanjson.com/users')
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .then(data => this.setState({datalist : data}))
  //   .catch(err => console.log('koreanjson api요청에러:'+err))
  // }
    
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
