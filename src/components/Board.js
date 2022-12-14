import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <Note />
            <Note />
            <Note />
          </div>
        </div>
        <div>
          <bottom className="btn btn-success add-button">Add</bottom>
        </div>
      </div>
    );
  }
}

export default Board;