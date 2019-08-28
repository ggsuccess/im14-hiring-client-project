import React from 'react';
import Home from './Home';
import User from './User';
import {Route} from 'react-router-dom';
//import './style.css'

class App extends React.Component{
  constructor(props){
    super(props);
    let userData =[{
      city: "성남시",
      createdAt: "2019-02-24T16:17:47.000Z",
      district: "분당구",
      email: "lee.jungdo@gmail.com",
      id: 1,
      name: "이정도",
      phone: "010-3192-2910",
      province: "경기도",
      street: "대왕판교로 160",
      updatedAt: "2019-02-24T16:17:47.000Z",
      username: "jd1386",
      website: "https://leejungdo.com",
      zipcode: "13525"
    },{
      city: "서울특별시",
      createdAt: "2019-02-24T16:17:47.000Z",
      district: "관악구",
      email: "jaewan@gmail.com",
      id: 2,
      name: "김재완",
      phone: "02-879-5000",
      province: "",
      street: "관악로 145",
      updatedAt: "2019-02-24T16:17:47.000Z",
      username: "lastrites2018",
      website: "https://github.com/lastrites2018",
      zipcode: "08832"
    },{
      city: "서울특별시",
      createdAt: "2019-02-24T16:17:47.000Z",
      district: "강동구",
      email: "sunny@daum.net",
      id: 3,
      name: "김성은",
      phone: "010-4280-1991",
      province: "",
      street: "성내로 25",
      updatedAt: "2019-02-24T16:17:47.000Z",
      username: "sunnysid3up",
      website: "https://github.com/sunnysid3up",
      zipcode: "05397"
    }
    ];
    this.state = {
      datalist : userData
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
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User}/>
      </div>
    )
  }
}

export default App;
