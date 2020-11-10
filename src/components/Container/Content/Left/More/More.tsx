import * as React from "react";
import { useState, useEffect } from "react";
import "./More.less";

export const More: React.FC = () => {
  const [countries, setCountries] = useState("");
  return (
    <>
      <div className="More">Více</div>
    </>
  );
};
