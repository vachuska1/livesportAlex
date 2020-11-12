import * as React from "react";
import "./Container.less";
import { Content } from "./Content/Content";

export const Container: React.FC = () => {
  return (
    // tady je zbytecnej ten element <> a </> to tam vubec byt nemusi... vis proc?
    <>
      <div className="Container">
        <Content>sdsadsadasdsds</Content>
      </div>
    </>
  );
};
