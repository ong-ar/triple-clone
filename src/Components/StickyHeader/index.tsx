import * as React from "react";
import background_img from "../../images/img-intro-logo-dark@2x.png";
import ExtraActionContainer from "./Components/ExtraActionContainer";
import ExtraActionItem from "./Components/ExtraActionItem";
import Logo from "./Components/Logo";
import HeaderContainer from "./Components/StickyHeaderContainer";

interface IProps {
  topOffset?: number;
  duration?: string;
}

const StickyHeader: React.SFC<IProps> = ({
  topOffset = 120,
  duration = "600ms"
}) => {
  return (
    <HeaderContainer
      topOffset={topOffset}
      duration={duration}
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid rgb(239, 239, 239)",
        height: "80px",
        zIndex: "1"
      }}
    >
      <Logo
        backgroundImage={"url(" + background_img + ")"}
        href="https://triple.guide"
      >
        TRIPLE
      </Logo>
      <ExtraActionContainer>
        <ExtraActionItem href="https://triple-corp.com">
          Triple Team
        </ExtraActionItem>
        <ExtraActionItem href="https://triple-corp.com/#contact">
          Contact
        </ExtraActionItem>
      </ExtraActionContainer>
    </HeaderContainer>
  );
};

export default StickyHeader;
