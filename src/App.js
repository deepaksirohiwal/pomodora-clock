import React from 'react';
import BreakLength from './components/break';
import SessionLength from './components/session';
import Timer from './components/timer';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sessionLength:25,
      breakLength:5,
      timeMinute:25
    };
    this.incrementBreak=this.incrementBreak.bind(this);
    this.decrementBreak=this.decrementBreak.bind(this);
    this.incrementSession=this.incrementSession.bind(this);
    this.decrementSession=this.decrementSession.bind(this);
    this.updateTimerMinute=this.updateTimerMinute.bind(this);
    this.onToggle=this.onToggle.bind(this);
    this.resetTimer=this.resetTimer.bind(this);
  }

  incrementBreak(){
    const {breakLength}=this.state;
    if(breakLength<60)
    this.setState({
      breakLength:breakLength+1
    })
  }
  decrementBreak(){
    const{breakLength}=this.state;    
    if(breakLength>1 ){
      this.setState({
        breakLength:breakLength-1
      });
  }
}
incrementSession(){
  const {sessionLength,timeMinute}=this.state;
  if(sessionLength<60){
      this.setState({
        sessionLength:sessionLength+1,
        timeMinute:timeMinute+1
      })
  }

}
decrementSession(){
  const {sessionLength,timeMinute}=this.state;
  if(sessionLength>1){
      this.setState({
        sessionLength:sessionLength-1,
        timeMinute:timeMinute-1
      })
  }

}
updateTimerMinute(){
  const{timeMinute}=this.state;
  this.setState({
    timeMinute:timeMinute -1
  });

}
onToggle(isSession){
  if(isSession){
    this.setState({
      timeMinute: this.state.sessionLength
    });
  }else{
    this.setState({
      timeMinute: this.state.breakLength
    })
  }
}
resetTimer(){
  this.setState({
    sessionLength:25,
    timeMinute: 25,
    breakLength:5
  });
}

  render() {
    return (
      <main className="outer-component">
        <h1>POMODORA CLOCK</h1>
        <section className="inner-first">
          <BreakLength breaktime={this.state.breakLength} increase={this.incrementBreak} decrease={this.decrementBreak}/>
          <SessionLength sessiontime={this.state.sessionLength} increase={this.incrementSession} decrease={this.decrementSession}/>
        </section>
        
        <Timer timeMinutes={this.state.timeMinute} breakTimer={this.state.breakLength}
                toggelKey={this.onToggle}
                updateTimer={this.updateTimerMinute}
                resetTimer={this.resetTimer}
        />
      </main>
    );
  }

  }
 

export default App;
