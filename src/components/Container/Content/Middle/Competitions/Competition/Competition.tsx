import * as React from "react";
import { useState } from "react";
import "./Competition.less";

interface CompetitionProps {
  league: string;
}

export const Competition: React.FC<CompetitionProps> = (props) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
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
      <div className="Open">{"ˇ"}</div>
    </div>
  );
};