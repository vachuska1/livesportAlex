import * as React from "react";
import { Calendar } from "./Calendar/Calendar";
import "./Menu.less";
import { Menusegment } from "./Menusegment/Menusegment";

export const Menu: React.FC = () => {
  return (
    <>
      <div className="Menu">
        <Menusegment />
        <Calendar />
      </div>
    </>
  );
};
