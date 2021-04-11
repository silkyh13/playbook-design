import React from "react";
import { Card, Flex, FlexItem, Badge } from "playbook-ui";

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
    <Flex
      justify="evenly"
      orientation="row"
      gap="sm"
      style={{ width: "200px" }}
    >
      {array.map((item) => (
        <FlexItem>
          <div style={{ width: "20%" }}>
            <Tickets item={item} />
          </div>
        </FlexItem>
      ))}
    </Flex>
  );
};

export default CardHighlight;
