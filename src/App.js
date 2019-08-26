import React from 'react';
// import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datalist : false
    }
  }
  componentDidMount(){
    fetch('https://koreanjson.com/users').then(res => 
      res.json()
    ).then(data => {
      this.setState({
        datalist : data
      })
    })
  }

  render(){
    const data = this.state.datalist;
    console.log(data);
    return(
      <div>
        {data.map(item,index => {
          item && <div> <p keys={index} data={item}></p></div>
        })}
      </div>
    )
  }
}

export default App;
