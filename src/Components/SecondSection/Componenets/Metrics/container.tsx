import * as React from "react";
import { useCountUp } from "react-countup";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  style?: IStyle;
  count_end?: number;
  delay?: number;
}

const preStyle: IStyle = {
  font_size: "36px"
};
const Container: React.FC<IProps> = ({ delay, count_end, style, children }) => {
  const { countUp } = useCountUp({ end: count_end, delay });
  return (
    <Presenter
      count={countUp}
      children={children}
      style={{ ...preStyle, ...style }}
    />
  );
};

export default Container;
