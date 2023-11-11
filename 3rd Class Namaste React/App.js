import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React JS element (Object) => HTMLElement(render)

//JSX is not html. It's html like or XML like syntax

// JSX => React.createElement => React JS element (Object) => HTMLElement(render)
// Babel is converting JSX to React.createElement
// attributes in camelCase
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

//React element

//JSX (TRANSPILED BEFORE REACHING js ENGINE) - who is transpiling ? -> Babel (inside parcel)

// Class based component
// Functional based component

const HeadingComponent = () => {
  return <h1>Namaste React Functional Component 1</h1>;
};

//OR

//Component Composition - Component inside Component
const HeadingComponent1 = () => (
  <div id="container">
    {/* <HeadingComponent /> */}
    {HeadingComponent()}
    <h2>{jsxHeading}</h2>
    <h1 className="heading">Namaste React Functional Component 2</h1>
  </div>
);

// React component

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<HeadingComponent1 />);

// JSX takes care of injection attacks like Cross site scripting
