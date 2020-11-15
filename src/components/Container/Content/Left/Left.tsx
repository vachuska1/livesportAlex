import { fchmod } from "fs";
import * as React from "react";
import "./Left.less";
import { Country } from "./Country/Country";
import { States } from "./States/States";
import { More } from "./More/More";

export const Left: React.FC = () => {
  return (
    <div className="Left">
      <div className="grid">
        <Country />
        <States />
        {/* <States> Albánie </States>
        <States>Alžírsko </States>
        <States>Andorra</States>
        <States>Anglie</States>
        <States>ssss</States> */}
        <More />
      </div>
    </div>
  );
};
