import * as React from "react";
import styled from "styled-components";
import background_img from "../../images/img-01-bg.png";

const Container = styled.div`
  position: relative;
  background-image: url(${background_img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  background: inherit inherit inherit inherit inherit inherit inherit;
  background-position: center center;
`;

const Section = styled.div`
  width: 1040px;
  height: 860px;
  position: relative;
  margin: 0px auto;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Section />
    </Container>
  );
};

export default Header;
