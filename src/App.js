import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    console.log("Event Handler Called ", counterId);
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = this.state.counters;
    counters.forEach(element => {
      if (element.id === counter.id) {
        element.value += 1;
      }
    });

    this.setState({
      counters
    });
  };
  handleDecrement = counter => {
    const counters = this.state.counters;
    counters.forEach(element => {
      if (element.id === counter.id) {
        element.value = element.value > 0 ? element.value - 1 : element.value;
      }
    });
    this.setState({
      counters
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          countersCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
