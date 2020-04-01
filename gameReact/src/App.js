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
      let rows = this.game.cells
          .map((item,rowIndex) => <tr>{item.map((item,colIndex) => <td onClick={this.onClick.bind(this, rowIndex, colIndex)}>{item}</td>)}</tr>);

      return (
          <div>
              <table align="center">
                  {rows}
              </table>
          </div>
      );
  }

}

export default App;
