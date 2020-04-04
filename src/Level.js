import React, { Component } from 'react';
import Control from "./Control.js";
import './App.css';
import './decoration.css';
class Level extends Component{
    constructor(props){
        super(props);
        this.state = {
            level : 0,
            isActive: 0
        }
        this.handleClickEasy = this.handleClickEasy.bind(this);
        this.handleClickNormal = this.handleClickNormal.bind(this);
        this.handleClickHard = this.handleClickHard.bind(this);
    }
    handleClickEasy(){
        this.setState({isActive: 1});
        this.setState({level: 5});
        this.render();
    }
    handleClickNormal(){
        this.setState({isActive: 1});
        this.setState({level: 3});
        this.render();
    }
    handleClickHard(){
        this.setState({isActive: 1});
        this.setState({level: 1.5});
        this.render();
    }
    render () {
        if(this.state.isActive === 0){
        return (
            <div>
                <br/>
                <h2>レベルを選択してください</h2>
                <button class="pinkbtn " onClick={() => this.handleClickEasy()}>簡単</button>
	            <button class="pinkbtn " onClick={() => this.handleClickNormal()}>普通</button>
	            
                <button class="pinkbtn " onClick={() => this.handleClickHard()}>難しい</button>
            </div>
            );
        }
        else {
            return(
                <div>
                    <Control dataFromParent = {this.state.level}/>
                </div>
            );
        }
    }
}
export default Level;