import * as React from "react";
import "./Container.less";
import { Content } from "./Content/Content";
import { Header } from "./Header/Header";

export const Container: React.FC = () => {
  return (
    <div className="Container">
      <Header />
      <Content />
    </div>
  );
};
