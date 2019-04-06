import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  href?: string;
  style?: IStyle;
}

const preStyle: IStyle = {
  background_color: "rgba(255, 255, 255, 0.1)",
  border_radius: "25px",
  height: "50px",
  width: "180px"
};

const Container: React.FC<IProps> = ({ href, style, children }) => {
  return (
    <Presenter
      style={{ ...preStyle, ...style }}
      href={href}
      children={children}
    />
  );
};

export default Container;
