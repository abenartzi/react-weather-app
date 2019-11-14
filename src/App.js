import React from 'react';
import './App.css';
import Forecast1Day from "./Forecast1Day";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Forecast1Day/>
            </div>
        );
    }

}

export default App;
