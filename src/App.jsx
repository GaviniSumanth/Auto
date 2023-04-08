import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Animation from "./components/Animation";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = null;
  }
  componentDidMount() {}
  render() {
    return (
      <div id="App">
        <Animation id="Animation" text="In progress..." emotion="busy" />
        <Chat />
      </div>
    );
  }
}

export default App;
