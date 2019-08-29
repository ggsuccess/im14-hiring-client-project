import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserInfo from './UserInfo';

class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }
  componentDidMount() {
    fetch("https://koreanjson.com/user")
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => this.setState({users : data}))
    .catch(err => console.log(err))
  }
  render(){
    const list = this.state.users;
    return(
      <div>
        <div>
          {list.map(item => item && <UserInfo key={item.id} datalist={item}/>)}
        </div>
        {list}
        <Link to='/'>선택</Link>
        <Link to='/'>뒤로 가기</Link>
        <div>
        <Link to='/'>home으로가기</Link>
        </div>
      </div>
    )
  }
}
export default User;