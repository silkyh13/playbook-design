import React from "react";
import { Card, Flex, FlexItem, Badge, Layout, Caption } from "playbook-ui";

import Tickets from "./Tickets";
const CardHighlight = ({ width }) => {
  let array = [
    { title: "NEW", number: 25, color: "info", items: 5 },
    { title: "MANAGER FEEDBACK", number: 5, color: "primary", items: 5 },
    { title: "PROCESSING", number: 3, color: "warning", items: 2 },
    { title: "AWAITING FEEDBACK", number: 2, color: "error", items: 3 },
    { title: "APPROVED", number: 15, color: "success", items: 4 },
  ];
  return (
    <Flex
      horizontal="center"
      // wrap
      orientation={width > 1300 ? "row" : "column"}
      gap="xs"
      // paddingLeft="lg"
      // paddingRight="lg"
      align={width > 1300 ? "" : "center"}
      className="ticket-container"
    >
      {array.map((item, i) => (
        <Tickets item={item} width={width} i={i} />
      ))}
    </Flex>
  );
};

export default CardHighlight;
