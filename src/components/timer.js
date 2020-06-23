import React from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSession:true,
            timeSeconds:0,
            play:false,
            intervalId:0
        }
        this.changePerSec=this.changePerSec.bind(this);
        this.timerPlay=this.timerPlay.bind(this);
        this.decreaseTimer=this.decreaseTimer.bind(this);
        this.reset=this.reset.bind(this);
        this.playSound=this.playSound.bind(this);

    }
    
    playSound(){
        const buzzer= document.getElementById('beep');
        buzzer.play();
    }

        
        
        
    
    changePerSec(){
        let intervalId= setInterval(this.decreaseTimer,1000);
        this.setState({
            intervalId:intervalId
        });
    }
    timerPlay(){       
        
        this.setState({play:!this.state.play});//change 'play' state to opposite of last call on click 
        if(this.state.play===false){                      
            
            this.changePerSec();

        }else {
            clearInterval(this.state.intervalId);
             
        };
               

    }
    decreaseTimer(){
        switch (this.state.timeSeconds) {
            case 0:
                if(this.props.timeMinutes===0){
                    if(this.state.isSession){
                        this.setState({isSession:false});
                        this.props.toggelKey(this.state.isSession);
                        this.playSound();
                        
                    }else{
                        this.setState({isSession:true});
                        this.props.toggelKey(this.state.isSession);
                        this.playSound();
                    }
                }
                
                
                else{ 
                    this.props.updateTimer()
                    this.setState({
                    timeSeconds:59
                });
                }
                
                break;
            default:
                const{timeSeconds} = this.state;                
                    this.setState({
                        timeSeconds:timeSeconds-1
                    });
                    break;
                

        }
    }
    reset(){
        clearInterval(this.state.intervalId);
        this.props.resetTimer();        
        this.setState({
            timeSeconds:0,
            play:false,
            isSession:true
        });
    }

    render(){
        return(
            <div className="timer-container">                
                <section className="timer-section">
                    <h2 id="timer-label">{this.state.isSession=== true? "Session":"Break"}</h2>
                    <div id="time-left"> 
                        <span>{this.props.timeMinutes}</span>
                        <span>:</span>
                        <span>{this.state.timeSeconds===0 ? "00":
                        this.state.timeSeconds<10?"0"+this.state.timeSeconds:this.state.timeSeconds}</span>
                    </div>                    
                </section>
                <section className="timer-control">                
                    <button id="start_stop" onClick={this.timerPlay}>{this.state.play===false?<PlayArrowIcon/>:<PauseIcon/>}</button>
                    <button id="reset" onClick={this.reset}><RestoreIcon/></button>
                </section>
                <audio id='beep' src="https://goo.gl/65cBl1"></audio>
     
            </div>
        );
    }
}
export default Timer;