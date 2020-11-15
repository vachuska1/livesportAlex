import * as React from "react";
import "./Calendar.less";
import { Date } from "./Date/Date";
import { Minus } from "./Minus/Minus";
import { Plus } from "./Plus/Plus";

export const Calendar: React.FC = () => {
  return (
    <>
      <div className="Calendar">
        <Minus />
        <Date />
        <Plus />
      </div>
    </>
  );
};
