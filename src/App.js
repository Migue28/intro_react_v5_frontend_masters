const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {name: "Mao", animal: "Cat", breed: "idk"}),
    React.createElement(Pet, {name: "Lune", animal: "Dog", breed: "idk"}),
    React.createElement(Pet, {name: "May", animal: "Usagi", breed: "idk"})
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
