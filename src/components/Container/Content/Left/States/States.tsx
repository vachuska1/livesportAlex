import * as React from "react";
import "./States.less";
import { England } from "./England/England";
import { Albania } from "./Albania/Albania";
import { Algeria } from "./Algeria/Algeria";
import { Andorra } from "./Andorra/Andorra";
import { Angola } from "./Angola/Angola";

export const States: React.FC = () => {
  return (
    <>
      <div className="States">
        <England />
        <Albania />
        <Algeria />
        <Andorra />
        <Angola />
      </div>
    </>
  );
};
