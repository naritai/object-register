import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./index.css";

const target = document.createElement("div");
render(<App />, target);
document.body.appendChild(target);
