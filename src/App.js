import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

// under imports
// Note (April 2nd, 2019): You no longer need real API keys, Petfinder Client will still work
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     pets: []
  //   };

  // }

  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });
    promise.then(console.log, console.error);
  }

  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
