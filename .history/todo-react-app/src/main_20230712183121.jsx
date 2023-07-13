import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./components/todoApp"

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<TodoApp />);
