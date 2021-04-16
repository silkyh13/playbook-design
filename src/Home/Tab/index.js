import React, { useState } from "react";
// import { Nav } from "../../";
import {
  Background,
  Flex,
  FlexItem,
  Nav,
  NavItem,
  SectionSeparator,
  Card,
} from "playbook-ui";

const HorizontalNav = ({ width }) => {
  const [navNumber, setNavNumber] = useState(0);
  let navItems = ["Dashboard", "Products", "In Progress", "Settings"];

  return (
    <div className="nav-bar-header-desktop">
      {width > 710 ? (
        <Background backgroundColor="white" className="xl-padding">
          <Flex

          // horizontal="left"
          // paddingLeft="xl" paddingRight="md"
          // spacing="between"
          >
            <FlexItem>
              <Nav
                link="#"
                // marginLeft="sm"

                orientation="horizontal"
              >
                {navItems.map((item, i) => (
                  <NavItem
                    className={navNumber == i && "_active"}
                    link="#"
                    text={item}
                    onClick={() => {
                      setNavNumber(i);
                    }}
                  />
                ))}
                {/* <NavItem className="_active" link="#" text="Dashboard" />
                <NavItem link="#" text="Products" />
                <NavItem link="#" text="In Progress" />
                <NavItem link="#" text="Settings" /> */}
              </Nav>
            </FlexItem>
          </Flex>
        </Background>
      ) : (
        <Card padding="none" borderRadius="none">
          <Nav
            link="#"
            // marginLeft="sm"

            orientation="vertical"
          >
            {navItems.map((item, i) => (
              <NavItem
                className={navNumber == i && "_active"}
                link="#"
                text={item}
                onClick={() => {
                  setNavNumber(i);
                }}
              />
            ))}
          </Nav>
        </Card>
      )}

      <SectionSeparator />
    </div>
  );
};

export default HorizontalNav;
