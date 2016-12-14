import React,{Component, PropTypes} from 'react';
import axios from 'axios';
import map from 'lodash/fp/map';

import { Link} from 'react-router';


class Home extends React.Component {
  constructor(){
    super();
    this.state={
      users:[],
      user:{}
    }
  }
  componentWillMount(){
    axios.get('http://localhost:4000/users')//后台代码
      .then((response)=>{
        // console.log(response);
        this.setState({
          users:response.data.users
        })
      })
  }
  handleClick(id){

  axios.get('http://localhost:4000/users/'+id)
  .then((response) => {
    this.setState({
      user: response.data.user
    });
  })
  alert(id)

}
      render () {
        // console.log(this.state.users);
        const userList = map((user) => {
          return (
            <div key={user._id} onClick={this.handleClick.bind(this,user._id)}>
              {user.username}
            </div>
          )
        }, this.state.users);

        return(
          <div >
          { userList }

          <div>
            username:
            { this.state.user.username }
        </div>
       </div>
        )
      }
    }
export default Home;
