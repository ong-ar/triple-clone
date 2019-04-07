import * as React from "react";
import styled from "styled-components";
import background_img from "../../images/triple@2x.png";
import SectionContainer from "../SectionContainer";
import Logo from "./Componenets/Logo";

const Section = styled.div`
  width: 1040px;
  height: auto;
  position: relative;
  margin: 0px auto;
`;

const SecondSection: React.FC = () => {
  return (
    <SectionContainer>
      <Section>
        <Logo background_image={"url(" + background_img + ")"}>
          2019년 2월 기준
        </Logo>
      </Section>
    </SectionContainer>
  );
};

export default SecondSection;
