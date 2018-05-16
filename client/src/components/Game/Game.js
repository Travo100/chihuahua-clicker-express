import React, { Component } from 'react';
import './Game.css';
import Card from '../Card';
import Scoreboard from '../Scoreboard';
import Footer from '../Footer';
import API from '../../utils/API';
class Game extends Component {
  state = {
    chihuahuas: [],
    score: 0,
    randomNumber: 0,
    tally: 0,
    selectedChihuahuaId: ""
  }

  getRandomIndex = myArray => Math.floor(Math.random() * myArray.length);

  componentDidMount() {
    API
      .getChihuahuas()
      .then(res => {
        let random = this.getRandomIndex(res.data);
        this.setState({
          randomNumber: random,
          chihuahuas: res.data,
          selectedChihuahuaId: res.data[random]._id
        });
      });
  }

  cardClickedOn = (id) => {
    if(id === this.state.selectedChihuahuaId) {
      let random = this.getRandomIndex(this.state.chihuahuas);
      this.setState({
        score: this.state.score + 1,
        randomNumber: random,
        selectedChihuahuaId: this.state.chihuahuas[random]._id
      });
    } else {
      this.setState({
        tally: this.state.tally + 1
      });
    }
  };

  render() {
    return (
      <div className="container">
          <Scoreboard 
            randomNumber={this.state.randomNumber}
            score = {this.state.score}
            tally = {this.state.tally}
          />
          {this.state.chihuahuas.map(chihuahua => (
           <Card
            key={chihuahua._id} 
            id={chihuahua._id} 
            name={chihuahua.name} 
            image={chihuahua.image}
            cardClickedOn={this.cardClickedOn} />
          ))}
          <Footer />

      </div>
    );
  }
}

export default Game;