import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  href?: string;
  style?: IStyle;
}

const preStyle: IStyle = {
  font_size: "17px"
};

const Container: React.FC<IProps> = ({ href = "", style, children }) => {
  return (
    <Presenter
      href={href}
      style={{ ...preStyle, ...style }}
      children={children}
    />
  );
};

export default Container;
