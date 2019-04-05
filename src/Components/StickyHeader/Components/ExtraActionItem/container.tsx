import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  href?: string;
  style?: IStyle;
}

const Container: React.FC<IProps> = ({
  href = "",
  style = { fontSize: "17px" },
  children
}) => {
  return <Presenter href={href} style={{ ...style }} children={children} />;
};

export default Container;
