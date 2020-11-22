import * as React from "react";
import { useState } from "react";
import "./Match.less";

interface MatchProps {
  home: string;
  result: string;
  away: string;
  halftime: string;
}

export const Match: React.FC<MatchProps> = (props) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <div className="Match">
      <div className="CheckboxMatch">
        <input
          className="checkboxMatch checkboxMatch--1"
          onClick={handleClick}
          checked={checked}
          type="checkbox"
        />
      </div>
      <div className="End">Konec</div>
      <div className="Home">{props.home}</div>
      <div className="Result">{props.result}</div>
      <div className="Away">{props.away}</div>
      <div className="Halftime">{props.halftime}</div>
    </div>
  );
};
