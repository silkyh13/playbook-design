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
    <div>
      <Flex
        horizontal="center"
        wrap
        orientation="row"
        gap="sm"
        paddingLeft="lg"
        paddingRight="lg"
        style={{ width: "900px" }}
      >
        {array.map((item) => (
          <Tickets item={item} />
        ))}
      </Flex>
    </div>
  );
};

export default CardHighlight;
