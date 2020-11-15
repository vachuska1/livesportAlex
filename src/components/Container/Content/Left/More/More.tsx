import * as React from "react";
import { useState, useEffect } from "react";
import "./More.less";

export const More: React.FC = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "clicked" : "More"} onClick={toggleClass}>
      Více
    </div>
  );
};
