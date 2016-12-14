import React,{Component, PropTypes} from 'react';
import axios from 'axios';
class User extends React.Component {
  constructor(){
    super();
    this.state={
      user:{}
    }
  }
  componentDidMount(){
          axios.get(`http://localhost:4000/users/${this.props.params._id}`)//后台代码
          .then((response) => {
            console.log(response);
            this.setState({user: response.data.user});
          })
  }
      render () {
        return(
          <div>
            个人信息：<br />
            姓名: {this.state.user.username}<br/>
            邮箱: {this.state.user.email}<br/>
            年龄:{this.state.user.age}

          </div>
        )
      }
    }
export default User;
