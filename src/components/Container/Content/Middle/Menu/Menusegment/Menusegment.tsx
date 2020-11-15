import * as React from "react";
import { Bet } from "./Bet/Bet";
import { Finished } from "./Finished/Finished";
import { Live } from "./Live/Live";
import { Matches } from "./Matches/Matches";
import "./Menusegment.less";
import { Mymatches } from "./Mymatches/Mymatches";
import { Willplay } from "./Willplay/Willplay";

export const Menusegment: React.FC = () => {
  return (
    <>
      <div className="Menusegment">
        <Matches />
        <Live />
        <Mymatches />
        <Bet /> <Finished />
        <Willplay />
      </div>
    </>
  );
};
