import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends Component {

  // Set variables as states
  state = {
    score: 0,
    topScore: 0,
    id: [],
    message: "Start Clicking!"
  }

  // Function for clicking image
  handleImageClick = event => {
    const imgId = event.target.id;

    // If click same image, reset score. Else, save img to array 
    if (this.state.id.includes(imgId)) {
      this.setState({
        score: 0,
        id: [],
        message: "You already chose that team."
      })
    }
    else {
      this.state.id.push(imgId);

      // Update score
      if (this.state.topScore <= this.state.score) {
        this.setState({
          topScore: this.state.score + 1,
          score: this.state.score + 1
        })
      }
      else {
        this.setState({
          score: this.state.score + 1
        })
      }
    }
  }

  render() {
    return(
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Images handleImageClick={this.handleImageClick}/>
        <Footer />
      </div>
    );
  }

}

export default App;
