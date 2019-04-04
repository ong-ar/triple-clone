import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
`;

interface IProps {
  topOffset?: number;
  duration?: number;
  style?: React.CSSProperties;
}

const Header: React.FC<IProps> = ({
  topOffset = 0,
  duration = 1000,
  style = {},
  children
}) => {
  const [opacity, setOpacity] = React.useState(0);
  const [transform, setTransform] = React.useState("0%");

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (topOffset > window.scrollY) {
        setOpacity(0);
        setTransform("-20%");
      } else {
        setOpacity(1);
        setTransform("0%");
      }
    });
  });

  return (
    <Container
      style={{
        opacity,
        transform: "translateY(" + transform + ")",
        transitionDuration: duration + "ms",
        ...style
      }}
    >
      {children}
    </Container>
  );
};

export default Header;
