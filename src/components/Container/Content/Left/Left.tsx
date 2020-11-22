import * as React from "react";
import { States } from "./States/States";

export const Left: React.FC = () => {
  return (
    <div className="Left">
      <div className="grid">
        <States />
      </div>
    </div>
  );
};
