import React from 'react';
import Home from './Home';
import User from './User';
import {Route} from 'react-router-dom';
import './style.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datalist : {
        id : '',
        name : '',
        username : '',
        email : '',
        phone : ''
      }
    }
  }
  componentDidMount(){
    // console.log('componentdidmount동작?')
    fetch('https://koreanjson.com/users')
    .then(res => res.json())
    .then(json => console.log(json))
    .then(data => this.setState({datalist : data}))
    .catch(err => console.log('koreanjson api요청에러:'+err))
  }
    
  render(){
    const data = this.state.datalist;
    console.log(data);
    return(
      <div>
        {data.map(item => {
          item &&  <User keys={item.id} data={item} users={item.user}/>
        })}
        <Route exact={true} path='/' component={Home} />
        <Route path='/users' component={User}/>
      </div>
    )
  }
}

export default App;
