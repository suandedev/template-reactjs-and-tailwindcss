import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DefaultAccordion from "./accordion/defaultAccordion";
import Paragraph from "./Paragraph";
import ParagraphData from "./paragraphData";
import AccordionBordered from "./accordion/accordionBordered";
import AccordionWithoutSpace from "./accordion/accordionWithoutSpace";
import AccordionWithoutSpaceWithBorder from "./accordion/accordionWithoutSpaceWithBorder";
import AccordionWithIcon from "./accordion/accordionWithIcon";
import AccordionHeaderBackgound from "./accordion/accordionHeaderBackgound";
import AccordionSolidBackground from "./accordion/accordionSolidBackground";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccordionSolidBackground />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
