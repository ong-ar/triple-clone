import * as React from "react";
import styled from "styled-components";
import apple_award_img from "../../images/app-store@2x.png";
import google_award_img from "../../images/play-store@2x.png";
import background_img from "../../images/triple@2x.png";
import SectionContainer from "../SectionContainer";
import Award from "./Componenets/Award";
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
        >
          <Award background_image={"url(" + google_award_img + ")"}>
            2018 구글 플레이스토어<br />올해의 앱 최우수상 수상
          </Award>
          <Award background_image={"url(" + apple_award_img + ")"}>
            2018 애플 앱스토어<br />오늘의 여행앱 선정
          </Award>
        </ContentsContainer>
      </Section>
    </SectionContainer>
  );
};

export default SecondSection;
