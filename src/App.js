import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   { id: "something-important" },
  //   React.createElement("h1", {}, "Adompt ME"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havenese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "mixbreed",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Lunaaa",
  //     animal: "Dog",
  //     breed: "not know",
  //   })
  // );

  return(
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havenese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktail" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  )
};

render(<App/>, document.getElementById("root"));
