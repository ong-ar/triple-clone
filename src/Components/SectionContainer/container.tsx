import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  style?: IStyle;
}

const preStyle: IStyle = {
  background: "inherit inherit inherit inherit inherit inherit inherit",
  background_position: "center center",
  overflow: "hidden",
  position: "relative"
};

const Container: React.FC<IProps> = ({ style, children }) => {
  return <Presenter style={{ ...preStyle, ...style }} children={children} />;
};

export default Container;
