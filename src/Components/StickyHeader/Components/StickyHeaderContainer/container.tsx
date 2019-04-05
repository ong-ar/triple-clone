import * as React from "react";
import Presenter, { IStyle } from "./presenter";

interface IProps {
  topOffset?: number;
  duration?: string;
  style?: IStyle;
}

const Container: React.FC<IProps> = ({
  topOffset = 120,
  duration = "0",
  style = {},
  children
}) => {
  const [opacity, setOpacity] = React.useState("0");
  const [transform, setTransform] = React.useState("0%");

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (topOffset > window.scrollY) {
        setOpacity("0");
        setTransform("-20%");
      } else {
        setOpacity("1");
        setTransform("0%");
      }
    });
  });

  return (
    <Presenter
      style={{ opacity, transform, duration, ...style }}
      children={children}
    />
  );
};

export default Container;
