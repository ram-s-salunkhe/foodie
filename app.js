import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object  => HTMLElement (render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX - HTML like Or XML like syntax
// JSX Transpile before it reaches the JS engine - (bable does transpilation)
// JSX => React.createElement => ReactElement - JS Object  => HTMLElement (render)

// React Element
const title = <h1>This is React Element</h1>;

// React Component
const Title = () => <h1>This is React Component</h1>;

// React functional Components
const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <Title />
      {Title()}
      <h2>{100 + 200}</h2>
      <h3>{console.log("HEllo")}</h3>
      <h1 className="heading">Namaste React Functional component </h1>;
    </div>
  );
};

root.render(<HeadingComponent/>);
