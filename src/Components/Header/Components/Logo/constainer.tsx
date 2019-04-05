import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  backgroundImage: string;
  href?: string;
  style?: IStyle;
}

const Container: React.FC<IProps> = ({
  backgroundImage,
  href = "",
  style = {},
  children
}) => {
  return (
    <Presenter
      backgroundImage={backgroundImage}
      href={href}
      style={{ ...style }}
      children={children}
    />
  );
};

export default Container;
