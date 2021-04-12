import React from "react";
import { IconStatValue } from "playbook-ui";
import { LineGraph, FlexItem, Flex, Title } from "playbook-ui";
import PipelineCard from "./pipeline-card";

const piplineData = [
  {
    category: "Add to cart",
    percentage: 1,
    quantity: 2577,
  },
  {
    category: "Shopping Cart",
    percentage: 0.79,
    quantity: 2023,
  },
  {
    category: "Payment Methods",
    percentage: 0.59,
    quantity: 1567,
  },
  {
    category: "Delivery Methods",
    percentage: 0.56,
    quantity: 1252,
  },
  {
    category: "Confirm",
    percentage: 0.49,
    quantity: 1182,
  },
  {
    category: "Delivery",
    percentage: 0.46,
    quantity: 1098,
  },
];

const PipelineChart = (props) => {
  return (
    <div>
      <Flex align="start" orientation="column">
        <FlexItem>
          <Title>Pipeline Shit</Title>
        </FlexItem>
        {piplineData.map((cardData) => {
          return (
            <FlexItem>
              <PipelineCard
                category={cardData.category}
                percentage={cardData.percentage}
                quantity={cardData.quantity}
              />
            </FlexItem>
          );
        })}
      </Flex>
    </div>
  );
};

export default PipelineChart;
