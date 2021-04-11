import React from "react";
import { Card, Flex, FlexItem, Badge, Layout } from "playbook-ui";

import Tickets from "./Tickets";
const CardHighlight = (props) => {
  let array = [
    { title: "NEW", number: 25, color: "category_2" },
    { title: "MANAGER FEEDBACK", number: 5, color: "category_1" },
    { title: "PROCESSING", number: 3, color: "category_3" },
    { title: "AWAITING FEEDBACK", number: 2, color: "error" },
    { title: "APPROVED", number: 15, color: "success" }
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
      >
        {array.map((item) => (
          <Tickets item={item} />
        ))}
      </Flex>
    </div>
  );
};

export default CardHighlight;
