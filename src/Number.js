import React, { Component } from 'react';
import './App.css';
import './decoration.css';
class Number extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            num1 : 0,
            num2: 0,
            sumNotEqual: 0
        }
        this.startRandom = this.startRandom.bind(this);
    }
    randomNum(min,max){
        
        const rand = Math.floor(min + Math.random() * (max - min));
        return rand;
    }
   
    startRandom(){
        const num1 = this.randomNum(1,20);
        const num2 = this.randomNum(1,20);
        const sum = num1+num2+this.randomNum(-2,2);
        this.setState({ num1: num1 });
        this.setState({ num2: num2 });
        this.setState({ sumNotEqual: sum });
        
    }
    render(){
        return(
        <div>
        <span id="num1">{this.state.num1}</span> + <span id="num2">{this.state.num2}</span> = <span id="equal">{this.state.sumNotEqual}</span>
        </div>
        );
    }
}
export default Number;