import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import styled from "styled-components";
import background_img from "../../images/img-01-bg.png";
import screen_img from "../../images/img-01-screen.jpg";
import { FadeIn } from "../../Keyframes";
import Button from "./Components/Button";
import Container from "./Components/Container";

const Section = styled.div`
  width: 1040px;
  height: 860px;
  position: relative;
  margin: 0px auto;
`;

const Contents = styled.div`
  top: 220px;
  position: absolute;
  width: 100%;
`;

const ContentsFirstItem = styled.h1`
  animation-duration: 2000ms;
  animation-name: ${FadeIn(0, 10)};
  font-size: 100px;
  line-height: 1.1;
  letter-spacing: -3px;
  font-family: sans-serif;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin: 0px 0px 0px -4px;
`;

const ContentsSecondItem = styled.p`
  animation-duration: 1600ms;
  animation-name: ${FadeIn(0, 5)};
  font-size: 17px;
  line-height: 2;
  margin: 18px 0px 0px 1px;
  font-family: sans-serif;
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
  font-weight: 500;
`;

const ContentsThirdItemContainer = styled.div`
  animation-duration: 1600ms;
  animation-name: ${FadeIn(0, 5)};
  margin-top: 76px;
`;

const ContentsFourthItemContainer = styled.div`
  animation-duration: 1600ms;
  animation-name: ${FadeIn(0, 5)};
  width: 330px;
  height: 680px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 13px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px -6px 9px 0px inset;
  border-radius: 48px;
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 0px;
  bottom: auto;
  left: auto;
  right: 0px;
`;

const ContentsFourthItem = styled.div`
  width: 300px;
  height: 650px;
  top: 15px;
  left: 15px;
  background-size: 300px 650px;
  border-radius: 33px;
  background-image: url(${screen_img});
  position: absolute;
  background-repeat: no-repeat;
`;
const ContentsFourthItem2 = styled.div`
  width: 162px;
  height: 38px;
  left: 84px;
  border-radius: 18px;
  content: "";
  position: absolute;
  top: 0px;
  background-color: rgb(250, 250, 250);
`;

const Header: React.FC = () => {
  return (
    <Container style={{ background_image: "url(" + background_img + ")" }}>
      <Section>
        <Contents>
          <ContentsFirstItem>
            어디로 <br /> 떠나시나요?
          </ContentsFirstItem>
          <ContentsSecondItem>
            여행을 도와드리는 일은 <strong>트리플</strong>이 가장 잘합니다.
          </ContentsSecondItem>
          <ContentsThirdItemContainer>
            <Button>앱 설치하기</Button>
          </ContentsThirdItemContainer>
          <ContentsFourthItemContainer>
            <ContentsFourthItem />
            <ContentsFourthItem2 />
          </ContentsFourthItemContainer>
        </Contents>
      </Section>
    </Container>
  );
};

export default Header;
