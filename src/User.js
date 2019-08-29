import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import UserInfo from './UserInfo';
import axios from 'axios';

class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }
  componentDidMount() {
    axios.get('https://koreanjson.com/users')
    .then(data => this.setState({users : data}))
    .catch(err => console.log('서버요청err:',err))
  }
  render(){
    const list = this.state.users;
    console.log(list)
    return(
      <div>
        <div>
          {list.map(item => item && <UserInfo key={item.id} datalist={item}/>)}
        </div>
        {list}
        
        <Link to='/userInfo'>선택</Link>
        <Link to='/'>뒤로 가기</Link>
        <div>
        <Link to='/'>home으로가기</Link>
        </div>
       
      </div>
    )
  }
}
export default User;