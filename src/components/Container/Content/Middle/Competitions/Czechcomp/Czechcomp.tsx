import * as React from "react";
import { useState } from "react";
import "./Czechcomp.less";

export const Czechcomp: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  const handleClickStar = () => {
    setCheck(!check);
  };
  return (
    <>
      <div className="Czechcomp">
        <input
          className="checkbox checkbox--1"
          onClick={handleClick}
          checked={checked}
          type="checkbox"
        />
        <div className="League">ČESKO: Fortuna liga</div>
        <input
          className="checkbox checkbox--2"
          onClick={handleClickStar}
          checked={check}
          type="checkbox"
        />
        <div className="Table">Tabulka</div>
        <div className="Open">{"ˇ"}</div>
      </div>
    </>
  );
};
