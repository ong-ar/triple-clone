import * as React from "react";
import { Keyframes } from "styled-components";
import Presenter, { IStyle } from "./presenter";

interface IProps {
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
  style,
  children
}) => {
  return (
    <Presenter
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
