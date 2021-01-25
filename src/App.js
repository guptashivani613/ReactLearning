import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    React.createElement("h1", {}, "Adompt ME"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "mixbreed",
    }),
    React.createElement(Pet, {
      name: "Lunaaa",
      animal: "Dog",
      breed: "not know",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
