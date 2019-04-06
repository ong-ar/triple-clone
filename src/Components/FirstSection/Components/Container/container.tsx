import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  style?: IStyle;
}

const Container: React.FC<IProps> = ({ style = {}, children }) => {
  return <Presenter style={{ ...style }} children={children} />;
};

export default Container;
