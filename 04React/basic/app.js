import React from "react";
import ReactDOM from "react-dom/client";


const element = React.createElement("h1", {id:"first", className: "Akash", style:{backgroundColor:"blue", fontSize: "30px", color: "pink"}}, "Hello coder");
const element2 = React.createElement("h2", {id:"second", className: "Akash", style:{backgroundColor:"black", fontSize: "30px", color: "white"}}, "Maja aaya mujhe");



const div1 = React.createElement('div', {}, [element,element2]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div1);

// JSX : javascript 