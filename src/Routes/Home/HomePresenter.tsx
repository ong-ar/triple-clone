import * as React from "react";
import Header from "../../Components/Header";
import StickyHeader from "../../Components/StickyHeader";

const HomePresenter: React.FC = () => {
  return (
    <div style={{ height: "2400px" }}>
      <StickyHeader />
      <Header />
    </div>
  );
};

export default HomePresenter;
