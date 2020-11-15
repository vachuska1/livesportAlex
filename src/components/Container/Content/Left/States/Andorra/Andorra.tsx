import * as React from "react";
import "./Andorra.less";
import { useState } from "react";

export const Andorra: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="Andorra" onClick={() => setShow(!show)}>
        Andorra {show ? "" : ""}
        {show && <div className="Andorra Andorra--1">Superliga</div>}
        {show && <div className="Andorra Andorra--2">1. liga</div>}
      </div>
    </>
  );
};
