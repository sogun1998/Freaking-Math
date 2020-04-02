import React, { Component } from 'react';
import './App.css';
import './decoration.css';
class ProgressBar extends Component{
    constructor(props){
        super(props);
        this.id = null;
        this.timeRemaining = this.timeRemaining.bind(this);
        this.timeClear = this.timeClear.bind(this);
    }
    timeRemaining(){
        
        var width = 1;
        this.id = setInterval(frame, 3000/105);
        function frame() {
            if (width >= 100) {
                clearInterval(this.id);
            } else {
                width++;
                document.getElementById("time").style.width = width + '%';
            }
        }
    }
    timeClear(){
        clearInterval(this.id);
    }
    render(){
        return (
          <div >
            <div class="timeBar">
		    <div id="time"></div>
	        </div>
          </div>
        );
        }
}
export default ProgressBar;