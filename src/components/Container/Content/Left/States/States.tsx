import * as React from "react";
import { State } from "./State/State";
import "./States.less";

export const States: React.FC = () => {
  return (
    <div className="States">
      <State
        name={"Anglie"}
        leagues={["Premier league", "Championship"]}
        extendClass={"Anglie"}
      />
      <State name="Albanie" />
      <State name="Egypt" />
      <State name="Angola" />
      <State name="Astralie" />
    </div>
  );
};
