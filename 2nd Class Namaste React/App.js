import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")); //
root.render(parent); // render method is just changing the JS object (heading) into h1 tag and put it up into DOM
