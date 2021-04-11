import React from "react";
// import { Nav } from "../../";
import {
  Background,
  Flex,
  FlexItem,
  Nav,
  NavItem,
  SectionSeparator
} from "playbook-ui";

const HorizontalNav = (props) => {
  return (
    <div className="nav-bar-header-desktop">
      <Background
        backgroundColor="white"
        //  paddingX="lg"
      >
        <Flex
          horizontal="left"
          // paddingLeft="xl" paddingRight="md"
          // spacing="between"
        >
          <FlexItem>
            <Nav link="#" marginLeft="sm" orientation="horizontal">
              <NavItem active link="#" text="Dashboard" />
              <NavItem link="#" text="Products" />
              <NavItem link="#" text="In Progress" />
              <NavItem link="#" text="Settings" />
            </Nav>
          </FlexItem>
        </Flex>
      </Background>
      <SectionSeparator />
    </div>
  );
};

export default HorizontalNav;
