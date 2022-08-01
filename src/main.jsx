import React from "react";
import ReactDOM from "react-dom/client";
import { Taskbar, Desktop, StartButton } from "./components";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Desktop>
      <Taskbar>
        <StartButton />
      </Taskbar>
    </Desktop>
  </React.StrictMode>
);
