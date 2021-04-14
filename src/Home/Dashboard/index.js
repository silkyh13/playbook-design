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
import PipelineChart from "./PipelineChart";
import { pipelineData } from "./PipelineChart/pipeline-data";

const Dashboard = (props) => {
  return (
    <Background className="xl-padding">
      <Flex orientation="column" vertical="center" gap="sm">
        {/* already a flexitem */}
        <Graph />
        <FlexItem className="ticket-caption">
          <Caption text="This weeks ticket escalation" />
        </FlexItem>
        <FlexItem className="ticket-system">
          <Ticket />
        </FlexItem>
        <Flex gap="sm" orientation="row">
          <PipelineChart
            title={pipelineData.title}
            chartData={pipelineData.chartData}
          />
          <Stats />
        </Flex>
      </Flex>
    </Background>
  );
};

export default Dashboard;
