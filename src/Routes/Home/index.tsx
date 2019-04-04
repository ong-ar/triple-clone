import * as React from "react";
import FirstSection from "../../Components/FirstSection";
import Header from "../../Components/Header";
import StickyHeader from "../../Components/StickyHeader";

const Home: React.FC = () => {
  return (
    <div style={{ height: "2400px" }}>
      <StickyHeader />
      <Header />
      <FirstSection />
    </div>
  );
};

export default Home;
