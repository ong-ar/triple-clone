import * as React from "react";
import styled from "styled-components";
import background_img from "../../images/triple@2x.png";
import SectionContainer from "../SectionContainer";
import ContentsContainer from "./Componenets/ContentsContainer";
import Logo from "./Componenets/Logo";
import Metrics from "./Componenets/Metrics";

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
        <ContentsContainer
          style={{ margin_left: "623px", padding_top: "150px" }}
        >
          <Metrics count_end={350}>
            <strong>만 명</strong>의 사용자
          </Metrics>
          <Metrics count_end={21}>
            <strong>만 개</strong>의 리뷰
          </Metrics>
          <Metrics count_end={650}>
            <strong>만 개</strong>의 저장
          </Metrics>
        </ContentsContainer>
        <ContentsContainer
          style={{ margin: "50px 0px 140px 623px", white_space: "nowrap" }}
        />
      </Section>
    </SectionContainer>
  );
};

export default SecondSection;
