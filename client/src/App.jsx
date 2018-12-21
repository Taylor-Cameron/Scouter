import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SummaryContainer from './SummaryContainer';
import BreakdownContainer from './BreakDownContainer.jsx';
import PlantBreakdown from './PlantBreakdown.jsx';
import Legend from './Legend.jsx';
import SunburstGraph from './SunburstGraph';
import EnergyMap from './EnergyMap';
import Disclaimer from './Disclaimer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      energytype: 'GAS'
    };
  }
  // When component mounts call the Api and send response to the client
  componentDidMount() {
    this.callApi()
      .then(res => this.setState((function(){
        return res.express
      })))
      .catch(err => console.log(err));
  }
  // Fetch data from the backend served at localhost:5000
  async callApi () {
    const response = await fetch('http://localhost:5000/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleClick = (event) => {
    this.setState({
      energytype: event.currentTarget.id
    });
  }

  render() {

    if (!this.state[0]) return (
      <p>{this.state.response}</p>
    );
    return (
      <div>
        <div>
          <Header date={this.state[0]}/>
        </div>
        <div className='content-wrapper'>
          <SummaryContainer summary={this.state[1]}/>
          <BreakdownContainer generation={this.state[2]} button={this.handleClick}/>
          <PlantBreakdown powerPlants={this.state[3]} generation={this.state[2]} energytype={this.state.energytype}/>
        </div>
        <div className='second-row'>
          <SunburstGraph />
          <Legend />
          <EnergyMap />
        </div>
        <Disclaimer />
      </div>
    );
}
}


export default App;



