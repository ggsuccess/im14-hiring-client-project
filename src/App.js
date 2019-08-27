import React from 'react';
// import './App.css';
import Home from './Home';
import User from './User';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datalist : false
    }
  }
  componentDidMount(){
    console.log('componentdidmount동작?')
    window.fetch('https://koreanjson.com/users')
    .then(res => res.json())
    .then(json => console.log(json))
    .then(data => this.setState({datalist : data}))
    .catch(err => console.log('koreanjson api요청에러:'+err))
  }
    
  render(){
    return(
      <div>
        <Home/>
        {this.state.datalist.map(item => {
          item &&  <User keys={this.state.datalist.id} data={item} users={item.user}/>
        })}
      </div>
    )
  }
}

export default App;
