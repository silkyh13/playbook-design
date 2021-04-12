import React from "react";
import { Flex, FlexItem } from "playbook-ui";

const PipelineCard = (props) => {
  return (
    <Flex gap="sm">
      <FlexItem>
        <p>{props.category} </p>
      </FlexItem>
      <FlexItem>
        <p>{props.percentage}</p>
      </FlexItem>
      <FlexItem>
        <p>{props.quantity}</p>
      </FlexItem>
    </Flex>
  );
};

export default PipelineCard;
