import * as React from "react";
import "./Middle.less";
import { Menu } from "./Menu/Menu";
import { Competitions } from "./Competitions/Competitions";

export const Middle: React.FC = () => {
  return (
    <>
      <div className="Middle">
        <Menu /> <Competitions />
      </div>
    </>
  );
};
