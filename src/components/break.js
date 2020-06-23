import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class BreakLength extends React.Component {
    render() {
        return (
            <div className="interval-container">
                <h2 id="break-label">Break Length</h2>
                <section className="interval-section">
                    <button id="break-increment" onClick={this.props.increase}><KeyboardArrowUpIcon/></button>
                    <p id="break-length" >{this.props.breaktime}</p>
                    <button id="break-decrement" onClick={this.props.decrease}><KeyboardArrowDownIcon/></button>
                </section>
                
            </div>
        );
    }
}
export default BreakLength;