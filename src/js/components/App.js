import React from "react";
import { RouteHandler } from "react-router";
import FluxComponent from "flummox/component";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedThemeId: undefined};
  }

  render(){
    return (
      <div>
        <FluxComponent
          connectToStores={["posts"]}
          flux={this.props.flux}
        >
          <RouteHandler/>
        </FluxComponent>
      </div>
    );
  }
}

export default App;
