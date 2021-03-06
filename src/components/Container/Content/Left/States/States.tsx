import * as React from "react";
import { useState } from "react";
import { State } from "./State/State";
import "./States.less";
import "../Country/Country.less";
import "../More/More.less";

export const States: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const [hiddenState, setHiddenState] = useState("state--hidden");

  const toggleClass = () => {
    setHiddenState("");
    setActive(!isActive);
  };

  return (
    <>
      <div className="Country">Země</div>
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
        <State name="Nemecko" extendClass={hiddenState} />
        <State name="Nizozemsko" extendClass={hiddenState} />
        <State name="Portugalsko" extendClass={hiddenState} />
        <State name="Spanelsko" extendClass={hiddenState} />
      </div>
      <div className={isActive ? "clicked" : "More"} onClick={toggleClass}>
        Více
      </div>
    </>
  );
};
