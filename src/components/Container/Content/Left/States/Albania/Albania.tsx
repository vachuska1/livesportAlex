import * as React from "react";
import "./Albania.less";
import { useState } from "react";

export const Albania: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="Albania" onClick={() => setShow(!show)}>
        Albanie {show ? "" : ""}
        {show && <div className="Albania Albania--1">Superliga</div>}
        {show && <div className="Albania Albania--2">1. liga</div>}
      </div>
    </>
  );
};
