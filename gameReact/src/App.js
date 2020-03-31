import React from 'react';
import './App.css';
import {Game} from './Game.js';

class App extends React.Component {
  constructor(){
    super();
    this.game = new Game();
    this.state = {
        cells: this.game.cells
    };
  }

  onClick(x, y) {
    this.game.updateClick(x, y);
    this.setState({cells: this.game.cells});
  }

  render(){
      return (
          <div>
              <table align="center">
                  <tr>
                      <td onClick={this.onClick.bind(this, 0, 0)}>{this.state.cells[0][0]}</td>
                      <td onClick={this.onClick.bind(this, 0,1)}>{this.state.cells[0][1]}</td>
                      <td onClick={this.onClick.bind(this, 0,2)}>{this.state.cells[0][2]}</td>
                  </tr>
                  <tr>
                      <td onClick={this.onClick.bind(this, 1,0)}>{this.state.cells[1][0]}</td>
                      <td onClick={this.onClick.bind(this, 1,1)}>{this.state.cells[1][1]}</td>
                      <td onClick={this.onClick.bind(this, 1,2)}>{this.state.cells[1][2]}</td>
                  </tr>
                  <tr>
                      <td onClick={this.onClick.bind(this, 2,0)}>{this.state.cells[2][0]}</td>
                      <td onClick={this.onClick.bind(this, 2,1)}>{this.state.cells[2][1]}</td>
                      <td onClick={this.onClick.bind(this, 2,2)}>{this.state.cells[2][2]}</td>
                  </tr>
              </table>
          </div>
      );
  }

}

export default App;
