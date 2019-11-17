import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import DataPart from "./Components/DataSciencePart";
import ReactPart from "./Components/ReactPart";

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }

  }
  hideNavBar = () => {
    console.log(this.state.show)
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount() {
    console.log(this.navRef)
    window.addEventListener('resize', this.changeSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.changeSize);
  }
  changeSize = () => {
    console.log('width:' + window.screen.width)

    if (window.screen.width > 600) {

      this.setState({
        show: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{ 'visibility': this.state.show ? 'visible' : 'hidden' }}> <Navbar show={this.state.show} /></div>

        <button style={{ 'display': 'none' }} onClick={this.hideNavBar} type="" className="btn123"></button>
        <ReactPart
          title="React系列"
          subtitle={'React'}
          dark={false}
          id="section1"
        />

        <DataPart
          title="Data系列"
          subtitle={'Data'}
          dark={true}
          id="section2"
        />

      </div >
    );
  }
}

export default App;
