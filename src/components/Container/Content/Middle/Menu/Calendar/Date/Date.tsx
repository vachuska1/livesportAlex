import * as React from "react";
import "./Date.less";
import { Datecont } from "./Datecont/Datecont";

export const Date: React.FC = () => {
  return (
    <>
      <div className="Date">
        <Datecont />
      </div>
    </>
  );
};
