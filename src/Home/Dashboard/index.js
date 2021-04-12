import React from "react";
import {
  Title,
  Caption,
  Flex,
  FlexItem,
  Body,
  Card,
  BarGraph,
  SectionSeparator,
  Button,
  LineGraph,
  Background,
  IconCircle,
  TextInput,
  Icon,
  Layout,
} from "playbook-ui";
import Ticket from "./Ticket";
import Graph from "./Graph";
import Stats from "./Stats";
import Pipeline from "./PipelineChart";

const Dashboard = (props) => {
  return (
    <div>
      <Flex orientation="column" padding="xl" vertical="center" gap="sm">
        {/* already a flexitem */}
        <Graph />
        <FlexItem className="ticket-caption">
          <Caption text="This weeks ticket escalation" />
        </FlexItem>
        <FlexItem>
          <Ticket />
        </FlexItem>
        <Flex gap="sm" orientation="row">
          <Pipeline />
          <Stats />
        </Flex>
      </Flex>
    </div>
  );
};

export default Dashboard;
