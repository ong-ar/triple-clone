import * as React from "react";
import styled from "styled-components";
import FirstSection from "../../Components/FirstSection";
import Header from "../../Components/Header";
import SecondSection from "../../Components/SecondSection";
import StickyHeader from "../../Components/StickyHeader";

const Container = styled.div``;

const Home: React.FC = () => {
  return (
    <Container>
      <StickyHeader />
      <Header />
      <FirstSection />
      <SecondSection />
    </Container>
  );
};

export default Home;
