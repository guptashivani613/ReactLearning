const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
