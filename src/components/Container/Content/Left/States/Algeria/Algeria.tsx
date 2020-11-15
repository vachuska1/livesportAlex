import * as React from "react";
import "./Algeria.less";
import { useState } from "react";

export const Algeria: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="Algeria" onClick={() => setShow(!show)}>
        Alžirsko {show ? "" : ""}
        {show && <div className="Algeria Algeria--1">Superliga</div>}
        {show && <div className="Algeria Algeria--2">1. liga</div>}
      </div>
    </>
  );
};
