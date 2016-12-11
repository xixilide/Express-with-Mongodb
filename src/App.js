import React,{Component, PropTypes} from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      username:''
    }
  }
  componentWillMount(){
    axios.get('http://localhost:4000/users')//后台代码
          .then((response)=>{this.setState({username:response.data.users.map((item,index) =>
            <div key={index}>{item.username}</div>)})})
  }
  render(){
    return(
      <div>
        {this.state.username}欢迎登录
      </div>
    )
  }
}
