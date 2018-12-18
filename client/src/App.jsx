import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SummaryContainer from './SummaryContainer';
import BreakdownContainer from './BreakdownContainer.jsx';
import PlantBreakdown from './PlantBreakdown.jsx';
//import SunburstGraph from './SunburstGraph';
import Disclaimer from './Disclaimer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
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

  render() {
    console.log(this.state[0])
    return (
      <div>
        <Header date={this.state[0]} />
        <div className='content-wrapper'>
          <SummaryContainer />
          <BreakdownContainer />
          <PlantBreakdown />
        </div>
        <div className='second-row'>
      {/* <SunburstGraph /> */}
      <Disclaimer />
        </div>
      </div>
    );
  }
}

export default App;
// <p>{this.state.response}</p>
