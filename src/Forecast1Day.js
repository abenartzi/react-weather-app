import React, {Component} from 'react';
import './Forecast1Day.css'
import Day from "./Day";


class Forecast1Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
            .then(res => res.json())
            .then(forecast => {
                this.setState({forecast});
                console.log(forecast)
            })

    }

    render() {
        const weekDay = {
          2:'Tuesday',
          3:'Wednesday',
          4:'Thursday',
          5:'Friday',
          6:'Saturday'
        };

        return (
            <div className="ForecastDay">

                {this.state.forecast.map((day,index) => {
                    return <Day
                        key={index}
                        title={weekDay[day.day]}
                        imgUrl={day.icon}
                        temperature={day.temperature}
                        condition={day.description}/>
                })}

            </div>
        );
    }
}

export default Forecast1Day;