import React from "react";
import { Card, Flex, FlexItem, Badge, Layout, Caption } from "playbook-ui";

import Tickets from "./Tickets";
const CardHighlight = (props) => {
  let array = [
    { title: "NEW", number: 25, color: "info" },
    { title: "MANAGER FEEDBACK", number: 5, color: "primary" },
    { title: "PROCESSING", number: 3, color: "warning" },
    { title: "AWAITING FEEDBACK", number: 2, color: "error" },
    { title: "APPROVED", number: 15, color: "success" },
  ];
  return (
    <Flex
      horizontal="center"
      // wrap
      orientation="row"
      // gap="xs"
      // paddingLeft="lg"
      // paddingRight="lg"
      className="ticket-container"
    >
      {array.map((item) => (
        <Tickets item={item} />
      ))}
    </Flex>
  );
};

export default CardHighlight;
