import * as React from "react";
import { useState } from "react";
import "./Competition.less";

interface CompetitionProps {
  league: string;
}

export const Competition: React.FC<CompetitionProps> = (props) => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  const toggleMatches = () => {
    setHidden(!hidden);
    let matches = document.getElementsByClassName("Match");
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].className.includes("Match--hidden")) {
        matches[i].classList.remove("Match--hidden");
      } else matches[i].classList.add("Match--hidden");
    }
  };

  return (
    <div className="Competition">
      <div className="Checkbox">
        <input
          className="checkbox checkbox--1"
          onClick={handleClick}
          checked={checked}
          type="checkbox"
        />
      </div>
      <div className="Title">{props.league}</div>
      <div className="Table">Tabulka</div>
      <div
        className={hidden ? "Open Open--hidden" : "Open"}
        onClick={toggleMatches}
      ></div>
    </div>
  );
};
