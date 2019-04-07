import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  style?: IStyle;
  background_image?: string;
}

const Container: React.FC<IProps> = ({ background_image, style, children }) => {
  return (
    <Presenter style={{ background_image, ...style }} children={children} />
  );
};

export default Container;
