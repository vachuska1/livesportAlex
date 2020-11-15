import * as React from "react";
import { useState } from "react";
import "./England.less";

export const England: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="England" onClick={() => setShow(!show)}>
        Anglie {show ? "" : ""}
        {show && <div className="England England--1">Superliga</div>}
        {show && <div className="England England--2">1. liga</div>}
      </div>
    </>
  );
};
