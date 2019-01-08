import React, { Component } from 'react';
import './App.css';
import Header from './Components/Titles/Header';
import SummaryContainer from './Components/Summary/SummaryContainer';
import BreakdownContainer from './Components/BreakDownContainer/BreakDownContainer';
import PlantBreakdown from './Components/PlantBreakdown/PlantBreakdown';
import Legend from './Components/Static/Legend/Legend.jsx';
import SunburstGraph from './Components/Graphs/SunburstGraph';
import EnergyMap from './Components/Maps/EnergyMap';
import Disclaimer from './Components/Static/Disclaimer';
import Modal from './Components/Modal';
import sortIncoming from './helpers/sortIncoming';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrapedData: false,
      currentPlantBreakdown: false,
    };
  }
  // When component mounts call the Api and send response to the client
  componentDidMount() {
    this.callApi()
      .then((res) => {
        this.setState({ scrapedData: res });
        return this.state;
      })
      .then(() => {
        this.prepPlantBreakdown('coal');
      })
      .catch((err) => console.log(err));
  }
  // Fetch data from the backend served at localhost:5000
  async callApi() {
    const response = await fetch('http://localhost:5000/api');
    const jsonResponse = await response.json();
    const body = sortIncoming(jsonResponse);
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  handleClick = (event) => {
    const newTarget = event.currentTarget.id.toLowerCase();
    this.prepPlantBreakdown(newTarget);
  };

  setModal = (modalData) => this.setState({ modalData });
  prepPlantBreakdown(targetArg) {
    const curTarget = targetArg;
    const targetDataList = this.state.scrapedData[curTarget];
    const getTargetPercent = (targPercent, targList) => {
      let outputPercent;
      targList.forEach((element) => {
        if (element.Asset === targPercent.toUpperCase()) {
          outputPercent = element.percentTng;
        }
      });
      return outputPercent;
    };
    const targetPercent = getTargetPercent(curTarget, this.state.scrapedData.breakdown);
    this.setState({
      currentPlantBreakdown: {
        target: curTarget,
        targetDataList: targetDataList,
        targetPercent: targetPercent,
      },
    });
  }
  closeModal = () => this.setState({ modalData: undefined });
  render() {
    console.log(this.state)
    if (!this.state.currentPlantBreakdown) return <p>loading</p>;
    return <div>
        <div>
          <Header date={this.state.scrapedData.timestamp} />
        </div>
        <div className="content-wrapper">
          <SummaryContainer summary={this.state.scrapedData.summary} />
          <BreakdownContainer breakdownData={this.state.scrapedData.breakdown} clickHandle={this.handleClick} />
          <PlantBreakdown energytype={this.state.currentPlantBreakdown.target} plantArr={this.state.currentPlantBreakdown.targetDataList} targetPercent={this.state.currentPlantBreakdown.targetPercent} setModalData={this.setModal} />
        </div>
        <div className="second-row">
        <SunburstGraph sunburstData={this.state.scrapedData.sunburstData}/>
          <Legend />
          <EnergyMap />
        </div>
        <Disclaimer />
      </div>;
  }
}

export default App;
