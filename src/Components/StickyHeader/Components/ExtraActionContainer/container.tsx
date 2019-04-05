import * as React from "react";
import Presenter from "./presenter";

const Container: React.FC = ({ children }) => {
  return <Presenter children={children} />;
};

export default Container;
