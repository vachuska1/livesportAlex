import * as React from "react";
import "./Competitions.less";
import { Czechcomp } from "./Czechcomp/Czechcomp";
import { Englcomp } from "./Englcomp/Englcomp";
import { Eurocomp } from "./Eurocomp/Eurocomp";

export const Competitions: React.FC = () => {
  return (
    <>
      <div className="Competitions">
        <Czechcomp /> <Eurocomp /> <Englcomp />
      </div>
    </>
  );
};
