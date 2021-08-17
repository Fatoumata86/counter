import './App.css';
import React from 'react';
import Counter from "./components/Counter"


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  render() {
	  console.log(this.state)
    return (
      <Counter 
	  count={this.state.count}
	  substract={() => {
	  if (this.state.count === 0){
		  return
	  }
	  this.setState({count: this.state.count - 1})      
	  }}
        increment={() => {
        this.setState({count: this.state.count + 1})      
        }} 
      />
    )
  }
}

export default App;
