import * as React from "react";
import { useState } from "react";
import "/Users/Putin's slut/Desktop/AlesReact/projektLivesport9.11.2020/livesport/src/components/Container/Content/Left/States/States.less";

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
