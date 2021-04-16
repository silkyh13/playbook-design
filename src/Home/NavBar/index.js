import React from "react";
// import { Nav } from "../../";
import {
  Background,
  Flex,
  FlexItem,
  SectionSeparator,
  User,
  LabelValue,
  Image,
  Icon,
  Badge,
} from "playbook-ui";

const HeadNav = (props) => {
  return (
    <div className="nav-bar-header-desktop">
      <Background
        backgroundColor="white"
        // paddingBottom="none"
        // paddingTop="md"
        // paddingX="md"
        className="xl-padding"
        // spacing="between"
      >
        <Flex vertical="center">
          <Image
            size="xs"
            url="https://logos-world.net/wp-content/uploads/2020/04/BTS-Logo.png"
          />

          <FlexItem grow />

          <LabelValue
            className="badge"
            active
            paddingRight="sm"
            icon="bell"
            title="4"
            variant="details"
          />
          <LabelValue
            className="badge"
            active
            paddingRight="sm"
            icon="envelope"
            title="2"
            variant="details"
          />
          {/* <Flex>
            <FlexItem>
              <Icon className="light" icon="bell"></Icon>
              <Badge text="4" variant="primary" />
            </FlexItem>
            <FlexItem>
              <Icon className="light" icon="envelope"></Icon>
              <Badge text="2" variant="primary" />
            </FlexItem>
          </Flex> */}

          <div>
            <User
              paddingRight="xs"
              align="left"
              avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
              name="Maria Illescas"
              // orientation="horizontal"
            />
          </div>

          <i className="fas fa-chevron-down"></i>
        </Flex>
      </Background>
      <SectionSeparator />
    </div>
  );
};

export default HeadNav;
