import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  background_image: string;
  style?: IStyle;
}

const Container: React.FC<IProps> = ({ background_image, style, children }) => {
  return (
    <Presenter
      background_image={background_image}
      style={{ ...style }}
      children={children}
    />
  );
};

export default Container;
