import * as React from "react";
import "./Datecont.less";

export const Datecont: React.FC = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const days = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
  const day = days[new Date().getDay()];
  return (
    <>
      <div className="Datecont">
        {date}/{month + 1} {day}
      </div>
    </>
  );
};
