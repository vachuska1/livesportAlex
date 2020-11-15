import * as React from "react";
import "./Angola.less";
import { useState } from "react";

export const Angola: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="Angola" onClick={() => setShow(!show)}>
        Angola {show ? "" : ""}
        {show && <div className="Angola Angola--1">Superliga</div>}
        {show && <div className="Angola Angola--2">1. liga</div>}
      </div>
    </>
  );
};
