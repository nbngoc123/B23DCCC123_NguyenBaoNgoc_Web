// Class component
import React from "react";
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          Count: {this.state.count}
          <button onClick={this.incrementCount}>
            Increment
          </button>
        </div>
      );
    }
  }
  
  // Sử dụng class component
  const App = () => {
    return <Counter />;
  }
export default Counter;