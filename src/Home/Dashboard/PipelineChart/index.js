import React from "react";
import { IconStatValue } from "playbook-ui";
import {
  LineGraph,
  FlexItem,
  Flex,
  Title,
  Card,
  CircleIconButton,
  SectionSeparator,
  Caption,
  ProgressSimple,
  Body,
} from "playbook-ui";

const pipelineData = {
  title: "Pipeline Chart",
  chartData: [
    { label: "Add to Cart", percent: 100.0, value: 2577 },
    { label: "Shopping Cart", percent: 79.0, value: 2023 },
    { label: "Payment Methods", percent: 59.0, value: 1567 },
    { label: "Delivery Methods", percent: 56.0, value: 1252 },
    { label: "Confirm", percent: 49.0, value: 1182 },
    { label: "Delivery", percent: 46.0, value: 1098 },
  ],
};

const PipelineChart = ({ chartData, title }) => (
  <Card
    className="pipeline"
    borderNone
    margin="sm"
    padding="none"
    shadow="deeper"
  >
    <Flex className="title-container" spacing="between" vertical="center">
      <Title padding="sm" size="5" text={title} />
      <CircleIconButton icon="ellipsis-h" variant="link" />
    </Flex>
    <SectionSeparator />

    {chartData.map((row, i) => (
      <Flex key={i} padding="sm" spacing="between" vertical="center">
        <FlexItem fixedSize="100px">
          <Caption size="xs" text={row.label} />
        </FlexItem>
        <FlexItem grow>
          <Flex spacing="around" vertical="center">
            <ProgressSimple percent={row.percent} width="15vw" />
            <FlexItem fixedSize="50px">
              <Caption marginX="xs" size="xs" text={`${row.percent}%`} />
            </FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem>
          <Flex vertical="right">
            <Body text={`${row.value}`} />
          </Flex>
        </FlexItem>
      </Flex>
    ))}
  </Card>
);

export default PipelineChart;
