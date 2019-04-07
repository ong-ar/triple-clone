import * as React from "react";
import FirstSection from "../../Components/FirstSection";
import Header from "../../Components/Header";
import SecondSection from "../../Components/SecondSection";
import StickyHeader from "../../Components/StickyHeader";

const Home: React.FC = () => {
  return (
    <div style={{ height: "2400px" }}>
      <StickyHeader />
      <Header />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Home;
