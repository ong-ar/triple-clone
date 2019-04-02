import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  transition-duration: 1s;
`;

interface IProps {
  topOffset: number;
}

const Header: React.SFC<IProps> = ({ topOffset }) => {
  const [offset, setOffset] = React.useState(0);
  const [opacity, setOpacity] = React.useState(0);
  const [transform, setTransform] = React.useState("0");

  window.addEventListener("scroll", () => {
    setOffset(window.scrollY);
    if (topOffset > window.scrollY) {
      setOpacity(0);
      setTransform("-20%");
    } else {
      setOpacity(1);
      setTransform("0%");
    }
  });
  return (
    <Container style={{ opacity, transform: "translateY(" + transform + ")" }}>
      {topOffset} - {offset}
    </Container>
  );
};

export default Header;
