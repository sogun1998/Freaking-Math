import React, { Component } from 'react';
import './App.css';
import './decoration.css';
import ProgressBar from "./ProgressBar.js";
class Control extends Component {
    constructor(props){
        super(props);
        this.timer = null;
        this.childTime = React.createRef();
        this.state = {
            num1: 0,
            num2: 0,
            sumNotEqual: 0,
            point:0,
            isActive : true
            
            
        }
        this.randomNum = this.randomNum.bind(this);
        this.handleClickStart = this.handleClickStart.bind(this);
        this.checkSum = this.checkSum.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }
    timeRemaining(){
        this.childTime.current.timeRemaining();
    }
    timeClear(){
        this.childTime.current.timeClear();
    }
   
    randomNum(min,max){
        
        const rand = Math.floor(min + Math.random() * (max - min));
        return rand;
    }
    handleClickStart(){
        if(!this.state.isActive) {
            this.setState({isActive: true});
            this.setState({ point: 0 });
        };
        const num1 = this.randomNum(1,20);
        const num2 = this.randomNum(1,20);
        const sum = num1+num2+this.randomNum(-2,2);
        this.setState({ num1: num1 });
        this.setState({ num2: num2 });
        this.setState({ sumNotEqual: sum });
        
        this.timer=setTimeout(this.gameOver.bind(this), 3000);
        this.timeRemaining();
    }
    checkSum(preSignal){

        const number1 = this.state.num1;
        const number2 = this.state.num2;
        const sum = this.state.sumNotEqual;
        const equal = ((number1+number2) === sum)? 1 : 2;
        if(preSignal!==equal){
            this.gameOver();
        }
        else{
            clearTimeout(this.timer);
            this.timeClear();
            
            this.setState({ point: this.state.point + 1 });
            this.handleClickStart();
            
        }
    }
    gameOver(){
        clearTimeout(this.timer);
        this.timeClear();
        this.setState({isActive: false});
    }
    render(){
        
        return(
            
        <div>
                
               
                <ProgressBar ref={this.childTime} />
	            {/* <button class="pinkbtn ranking" onclick="location.href='ranking.php'">RANKING</button> */}
	            <button class="pinkbtn start" onClick={() => this.handleClickStart()}>START</button>
	            
                {/* <button class="pinkbtn logout" onclick="location.href='logout.php'">LOGOUT</button> */}
                <div className={(this.state.isActive)? "":"display-none"}>
                <div class="main">

          
                <span class="point">Point : {this.state.point}</span><br/>
                <span class="num1">{this.state.num1}</span> + <span class="num2">{this.state.num2}</span> = <span class="equal">{this.state.sumNotEqual}</span>
                </div>	
                <br/>
                <button class="greenbtn true" onClick={() => this.checkSum(1)}>TRUE</button>
                <button class="greenbtn false" onClick={() => this.checkSum(2)}>FALSE</button>
                </div>
                <div className={(this.state.isActive)? "display-none":"name"}>Thua cuoc</div>
                </div>
        );
    }
}
export default Control;