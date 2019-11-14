import React, {Component} from 'react';
import './Day.css'
class Day extends Component {
    render() {
        return (
            <div className="Day">
                <h1>{this.props.title}</h1>
                <img src={require(`./icons/${this.props.imgUrl}.png`)} alt='icon'/>
                <div className="DayStatus">
                <h5>{this.props.temperature}°</h5>
                <h5>{this.props.condition}</h5>
                </div>
            </div>
        );
    }
}

export default Day;