import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";
import "./styles.css";

ReactDom.render(<App />, document.getElementById("root"));

let time = new Date().toLocaleTimeString();
console.log(time);

function sayHi() {
  console.log("Hey");
}
setInterval(sayHi, 1000);
