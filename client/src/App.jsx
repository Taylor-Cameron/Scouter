import React, { Component } from 'react';
import './App.css';
import Header from './Titles/Header';
import SummaryContainer from './Summary/SummaryContainer';
import BreakdownContainer from './BreakDownContainer/BreakDownContainer';
import PlantBreakdown from './PlantBreakdown';
import Legend from './Legend.jsx';
import SunburstGraph from './SunburstGraph';
import EnergyMap from './EnergyMap';
import Disclaimer from './Disclaimer';
import Modal from './Modal';
import sortIncoming from './helpers/sortIncoming'

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrapedData: false
    };
  }
  // When component mounts call the Api and send response to the client
  componentDidMount() {
    this.callApi()
      .then(res =>
        this.setState({scrapedData: res})
      )
      .catch(err => console.log(err));
  }
  // Fetch data from the backend served at localhost:5000
  async callApi() {
    const response = await fetch("http://localhost:5000/api");
    const jsonResponse = await response.json();
    const body = sortIncoming(jsonResponse);
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  handleClick = event => {
    this.setState({
      energytype: event.currentTarget.id
    });
  };

  setModal = modalData => this.setState({ modalData });

  closeModal = () => this.setState({ modalData: undefined })
  render() {
    
    if (!this.state.scrapedData.summary) return <p>loading</p>;
    if (this.state.scrapedData.summary) {
      // summary [0] = total power
      // summary [2] = total load
      // summary [3] = net to grid
    }
    return(
      <div>
        <Header date={this.state.scrapedData.timestamp} />
      </div>
    )
    // WIP component
    /*
          <BreakdownContainer
          breakdownData={this.state.scrapedData.breakdown}
          button={this.handleClick}
          />
        <SummaryContainer summary={this.state.scrapedData.summary} />

        />
    */
    /*
    */
    // WORKING COMPONENTS
    // <SummaryContainer summary={this.state.scrapedData.summary} />


    // return (
    //   <div>
    //     <div>
    //       <Header date={this.state[0]} />
    //     </div>
    //     <div className="content-wrapper">
    //       <PlantBreakdown
    //         powerPlants={this.state[3]}
    //         generation={this.state[2]}
    //         energytype={this.state.energytype}
    //         setModalData={this.setModal}
    //       />
    //     </div>
    //     <div className="second-row">
    //       <SunburstGraph />
    //       <Legend />
    //       <EnergyMap />
    //     </div>
    //     <Disclaimer />
    //     <Modal data={this.state.modalData} closeModal={this.closeModal} />
    //   </div>
    // );
  }
}


export default App;



