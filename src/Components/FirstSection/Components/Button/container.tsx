import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  href?: string;
  style?: IStyle;
}

const Container: React.FC<IProps> = ({
  href,
  style = {
    background_color: "rgba(255, 255, 255, 0.1)",
    border_radius: "25px",
    height: "50px",
    width: "180px"
  },
  children
}) => {
  return <Presenter style={{ ...style }} href={href} children={children} />;
};

export default Container;
