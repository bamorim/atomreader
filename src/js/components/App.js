import React from "react";
import { RouteHandler } from "react-router";
import FluxComponent from "flummox/component";

class App extends React.Component {
  render(){
    return (
      <div>
        <FluxComponent flux={this.props.flux}>
          <RouteHandler/>
        </FluxComponent>
      </div>
    );
  }
}

export default App;
