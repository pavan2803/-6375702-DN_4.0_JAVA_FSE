import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>People Count</h2>
        <p>Entered: {this.state.entryCount}</p>
        <p>Exited: {this.state.exitCount}</p>
        <button onClick={this.UpdateEntry} style={{ marginRight: '10px' }}>
          Login
        </button>
        <button onClick={this.UpdateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
