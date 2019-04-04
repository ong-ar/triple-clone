import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import background_img from "../../images/img-01-bg.png";
import { FadeIn } from "../../Keyframes";

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

const Contents = styled.div`
  top: 220px;
  position: absolute;
  width: 100%;
`;

const ContentsFirstItem = styled.h1`
  animation-duration: 600ms;
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
  animation-duration: 900ms;
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
  animation-duration: 900ms;
  animation-name: ${FadeIn(0, 5)};
  margin-top: 76px;
`;

const Header: React.FC = () => {
  const [ButtonOver, setButtonOver] = React.useState(false);

  const [Style, setStyle] = React.useState({});

  const buttonToggle = (): void => {
    setButtonOver(!ButtonOver);
  };

  React.useEffect(() => {
    if (ButtonOver) {
      setStyle({ backgroundColor: "rgb(255, 255, 255)" });
    } else {
      setStyle({});
    }
  });

  return (
    <Container>
      <Section>
        <Contents>
          <ContentsFirstItem>
            어디로 <br /> 떠나시나요?
          </ContentsFirstItem>
          <ContentsSecondItem>
            여행을 도와드리는 일은 <strong>트리플</strong>이 가장 잘합니다.
          </ContentsSecondItem>
          <ContentsThirdItemContainer>
            <Button
              variant="outline-light"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "25px",
                height: "50px",
                width: "180px",
                ...Style
              }}
              onMouseOver={buttonToggle}
              onMouseOut={buttonToggle}
            >
              앱 설치하기
            </Button>
          </ContentsThirdItemContainer>
        </Contents>
      </Section>
    </Container>
  );
};

export default Header;
