import React,{Component, PropTypes} from 'react'

export default class App extends Component {

  render(){

    return(
      <div>
        欢迎登录
        {this.props.children}
      </div>
    )
  }
}
