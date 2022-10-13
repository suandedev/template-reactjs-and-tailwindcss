import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DefaultButton from "./button/DefaultButton";
import MyButton from "./button/MyButton";
import ButtonLight from "./button/ButtonLight";
import OutlineButton from "./button/OutlineButton";
import ButtonSize from "./button/ButtonSize";
import OutlineButtonSize from "./button/OutlineButtonSize";
import SquareButton from "./button/SquareButton";
import SquareOutlineButton from "./button/SquareOutlineButton";
import ButtonRightIcon from "./button/ButtonRightIcon";
import ButtonLeftIcon from "./button/ButtonLeftIcon";
import Modal from "./modal/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
