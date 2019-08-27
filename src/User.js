import React, {Component} from 'react';

class User extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {name, username, email, phone} = this.props.data;
    return(
      <div>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    )
  }
}
export default User