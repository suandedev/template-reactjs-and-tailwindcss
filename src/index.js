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
import ButtonGroup from "./buttonGroup/ButtonGrup";
import ListGroup from "./listGroup/ListGroup";
import BasicListGroup from "./listGroup/BasicListGroup";
import MediaObject from "./mediaObject/MediaObject";
import BasicMediaObject from "./mediaObject/BasicMediaObject";
import AlignTopMediaObject from "./mediaObject/AlignTopMediaObject";
import AlignCenterMediaObject from "./mediaObject/AlignCenterMediaObject";
import AlignBottomMediaObject from "./mediaObject/AlignBottomMediaObject";
import MyCard from "./card/Card";
import BasicCard from "./card/BasicCard";
import BasicCardWithBorder from "./card/BasicCardWithBorder";
import BasicCardWithLink from "./card/BasicCardWithLink";
import CardWithImg from "./card/CardWithImg";
import MyDropdown from "./dropdown/MyDropdown";
import DropdownDivider from "./dropdown/DropdownDivider";
import ProgresBar from "./progresBar/ProgressBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProgresBar bgcolor="orange" progress="30" height={30} />
    <ProgresBar bgcolor="red" progress="60" height={30} />
    <ProgresBar bgcolor="#99ff66" progress="50" height={30} />
    <ProgresBar bgcolor="#ff00ff" progress="85" height={30} />
    <ProgresBar bgcolor="#99ccff" progress="95" height={30} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
