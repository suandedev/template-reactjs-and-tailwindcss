import IconClear from "../icon/clear";
import IconSmile from "../icon/smile";
import React, { useState } from "react";
import IconError from "../icon/error";
import IconLike from "../icon/like";
import IconInfo from "../icon/info";
import IconSuccess from "../icon/success";
import IconWarning from "../icon/warning";
import { FacebookOutlined } from "@mui/icons-material";

const Alert = ({ icon, iconStatus, message, bg, color, rounded, border, link, linkStyle }) => {
  const [isActive, setIsActive] = useState(true);

  const icons = () => {
    if (icon == "like") {
      return <IconLike />;
    } else if (icon == "error") {
      return <IconError />;
    } else if (icon == "info") {
      return <IconInfo />;
    } else if (icon == "success") {
      return <IconSuccess />;
    } else if (icon == "smile") {
      return <IconSmile />;
    } else if (icon == "warning") {
      return <IconWarning />;
    }
  };

  return (
    <>
      {isActive && (
        <div
          class={
            "flex flex-row justify-between items-center m-4 p-4 " +
            bg +
            " " +
            color +
            " rounded-" +
            rounded + " " + border
          }
        >
          <div class="flex flex-row items-center space-x-2">
            <div className="icon">{iconStatus ? icons() : ""}</div>
            <h1 className="message">{message}</h1>
            <a href="#" class={linkStyle}>{link}</a>
          </div>
          <button class="text-gray-500" onClick={() => setIsActive(!isActive)}>
            <IconClear />
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
