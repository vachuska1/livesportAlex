import * as React from "react";
import "./Content.less";
import { Left } from "./Left/Left";
import { Middle } from "./Middle/Middle";
import { Right } from "./Right/Right";

export const Content: React.FC = () => {
  return (
    <div className="Contentcont">
      <div className="Content">
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
};
