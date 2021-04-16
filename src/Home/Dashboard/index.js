import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
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
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      let performanceTab = document.getElementsByClassName(
        "performance-tab"
      )[0];
      if (document.getElementsByClassName("first-component")) {
        document
          .getElementsByClassName("first-component")[0]
          .getElementsByClassName("graph-container")[0].style.height = `${
          performanceTab.offsetHeight + 1
        }px`;
      }
      if (document.getElementsByClassName("highcharts-root")) {
        document.getElementsByClassName("highcharts-root")[0].style.height =
          performanceTab.offsetHeight - 34;
      }

      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const Dashboard = (props) => {
  const [width, height] = useWindowSize();
  return (
    <Background className="xl-padding">
      <Flex orientation="column" vertical="center" gap="sm">
        <Graph width={width} height={height} />
        <FlexItem className="ticket-caption">
          <Caption text="This weeks ticket escalation" />
        </FlexItem>
        <FlexItem className="ticket-system">
          <Ticket useWindowSize={useWindowSize} />
        </FlexItem>
        <Flex
          gap="sm"
          orientation={width >= 946 ? "row" : "column"}
          vertical="center"
          className="graph-and-stat"
        >
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
