import React from "react";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import ReactDOM from "react-dom";

class App extends React.Component {
 state = {lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message='Please accept Location request.'/>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
