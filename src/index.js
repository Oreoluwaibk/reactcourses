import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
const name = "Ibikunle Oreoluwa";
const date = new Date();
const year = date.getFullYear()


ReactDOM.render(
<div>
<h1>Welcome to React!</h1>
<p>Created by {name} </p>
<p>Copywrite {year}. </p>
</div>, 
rootElement);
