import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Mao", animal: "Cat", breed: "idk" }),
  //   React.createElement(Pet, {
  //     name: "Lune",
  //     animal: "Dog",
  //     breed: "Labrador",
  //   }),
  //   React.createElement(Pet, { name: "May", animal: "Usagi", breed: "idk" })
  // );
  return(
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Mao" animal="Cat" breed="idk"/>
      <Pet name="Lune" animal="Dog" breed="Labrador"/>
      <Pet name="May" animal="Usagi" breed="white"/>
    </div>
  )
};

render(<App />, document.getElementById("root"));
