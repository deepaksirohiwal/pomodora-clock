import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
class SessionLength extends React.Component{
    render(){
        return(
            <div className="interval-container"> 
                <h2 id="session-label">Session Length</h2>
                <section className="interval-section">
                    <button id="session-increment" onClick={this.props.increase}><KeyboardArrowUpIcon/></button>
                    <p id="session-length">{this.props.sessiontime}</p>
                    <button id="session-decrement" onClick={this.props.decrease}><KeyboardArrowDownIcon/></button>
                </section>
                
            </div>
        );
    }
}
export default SessionLength;