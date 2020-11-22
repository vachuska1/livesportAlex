import * as React from "react";
import { useState } from "react";
import "../States.less";

interface StateProps {
  name: string;
  leagues?: Array<string>;
  extendClass?: string;
}

export const State: React.FC<StateProps> = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={props.extendClass ? props.extendClass : "default"}
        onClick={toggle}
      >
        {props.name}
      </div>
      {open &&
        (props.leagues ? (
          <div>
            {props.leagues.map((element) => {
              return <div>{element}</div>;
            })}
          </div>
        ) : (
          <div>
            <div> premier leaugue</div>
            <div>druha liga</div>
          </div>
        ))}
    </>
  );
};
