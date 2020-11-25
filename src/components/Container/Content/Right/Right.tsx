import * as React from "react";
import "./Right.less";
import { Advertisement } from "./Advertisement/Advertisement";
import { Program } from "./Program/Program";

export const Right: React.FC = () => {
  return (
    <div className="Right">
      <Program />
      <Advertisement />
    </div>
  );
};
