import React, { Component } from 'react';
import Control from "./Control.js";
import './App.css';
import './decoration.css';
import LoginForm from "./LoginForm/LoginForm";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginUser:'',
      userList : [
        {
          userName: "zovivo",
          password: "123456"
        },
        {
          userName: "sogun1998",
          password: "123456"
        },
      ],
    };
    this.handleLogin = this.handleLogin.bind(this)
  }

  checkLoginSuccess(user){
    let isSuccess = 0;
    this.state.userList.map((ele, index) => {
      if(ele.userName === user.userName){
        if(ele.password === user.password)
          isSuccess = 1;
      }
    })
    return isSuccess;
  }

  handleLogin(user) {
    console.log(this.state);
    console.log("user: "+user.userName);
    console.log("password: "+user.password);
    if(this.checkLoginSuccess(user) != 1){
      alert("Wrong userName or password !");
      return;
    }else{
      this.setState({ loginUser: user.userName })    
    }
    this.render();
  }

  render() {
    if (this.state.loginUser === '') {
      return (
        <div className="App">
        <LoginForm onSubmit={this.handleLogin}
        />
      </div>
    );  
    }else{
      return (
        <div className="App">
        <Control 
        />
      </div>
    );  
    }
  }
}

export default App;
