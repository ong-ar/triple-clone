import * as React from "react";
import { Keyframes } from "styled-components";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  background_image: string;
  animation_duration?: string;
  animation_delay?: string;
  animation_fill_mode?: string;
  animation_name?: Keyframes;
  style?: IStyle;
}

const Container: React.FC<IProps> = ({
  animation_duration,
  animation_delay,
  animation_fill_mode,
  animation_name,
  background_image,
  style,
  children
}) => {
  return (
    <Presenter
      background_image={background_image}
      style={{
        animation_delay,
        animation_duration,
        animation_fill_mode,
        animation_name,
        ...style
      }}
      children={children}
    />
  );
};

export default Container;
