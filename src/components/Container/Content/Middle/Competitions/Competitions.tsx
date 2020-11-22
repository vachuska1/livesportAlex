import * as React from "react";
import "./Competitions.less";
import { Competition } from "./Competition/Competition";
import { Match } from "./Match/Match";

export const Competitions: React.FC = () => {
  return (
    <div className="Competitions">
      <Competition league={"Česko: Fortuna Liga"} />
      <Match
        home={"Slovacko"}
        result={"1:3"}
        away={"Teplice"}
        halftime={"(0-1)"}
      />
      <Match
        home={"Sparta"}
        result={"2:2"}
        away={"Slavia"}
        halftime={"(0-2)"}
      />
      <Competition league={"Anglie: Premier League"} />
    </div>
  );
};
