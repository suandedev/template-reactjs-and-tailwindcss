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
import AccordionActiveBackgound from "./accordion/accordionActiveBackground";
import Alert from "./alert/Alert";
import BasicAlert from "./alert/BasicAlert";
import SolidAlt from "./alert/solidAlt";
import DismissableWithSolid from "./alert/dismissableWithSolid";
import AlertWithLink from "./alert/alertWithLink";
import AlertWithLinkANdSolidColor from "./alert/alertWithLinkAndSolidColor";
import AlertOutline from "./alert/alertOutline";
import AlertSocial from "./alert/alertSocial";
import BadgesSize from "./badge/bagesSize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BadgesSize />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
