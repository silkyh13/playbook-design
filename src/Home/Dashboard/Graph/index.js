import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import {
  LineGraph,
  Flex,
  FlexItem,
  Title,
  Card,
  Nav,
  Background,
  Button,
  Icon,
  Table,
  TableRow,
  Caption,
  IconValue,
  IconCircle,
  CircleIconButton,
} from "playbook-ui";

const data = [
  {
    name: "Number of Installations",
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  },
];
const keyPerformance = [
  { tab: "Revenue", change: 26 },
  { tab: "Orders", change: -2 },
  { tab: "Profit" },
  { tab: "Average Check", change: 5 },
  { tab: "Canceled", change: -18 },
  { tab: "Repeat Sales" },
];
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      let performanceTab = document.getElementsByClassName(
        "performance-tab"
      )[0];
      if (document.getElementsByClassName("first-component")) {
        console.log("made it here");
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

      setSize([performanceTab.offsetWidth, performanceTab.offsetHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const LineGraphLegend = (props) => {
  const [width, height] = useWindowSize();
  const [newHeight, setNewHeight] = useState(320);
  useState(() => {
    let string = height.toString() + "px";
    console.log(height, "ihihih");
    setNewHeight(string);
  }, [newHeight, height]);
  return (
    <div className="first-component">
      <Flex orientation="column" marginTop="lg" marginBottom="sm">
        <Caption text="Dashboard" className="light" />
        <Title size={3} tag="h3" text="Commerce Dashboard" />
      </Flex>

      <Card borderRadius="none" className="card" padding="xs">
        <Flex orientation="row" spacing="between" vertical="center">
          <FlexItem paddingX="xs">
            <Title size={4} tag="h4" text="Key Performance Indicators" />
          </FlexItem>
          <CircleIconButton icon="comment-dots" variant="secondary" />
        </Flex>
      </Card>

      <Flex orientation="row" className="second-row">
        <div className="performance-tab">
          <Table size="md">
            <tbody>
              {keyPerformance.map((item, i) => (
                <TableRow
                  key={i}
                  sideHighlightColor={
                    item.tab !== "Revenue" ? "none" : "category_1"
                  }
                  className="row-height"
                >
                  <td className="padding-tab">
                    <Flex orientation="horizontal" spacing="between">
                      <div className="data-a">{item.tab}</div>
                      <div
                        className="data-status"
                        data-status={item.change > 0 ? "true" : "false"}
                      >
                        {item.change > 0 ? (
                          <i class="fas fa-arrow-up"></i>
                        ) : item.change < 0 ? (
                          <i class="fas fa-arrow-down"></i>
                        ) : (
                          ""
                        )}

                        {item.change && Math.abs(item.change) + "%"}
                      </div>
                    </Flex>
                  </td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>

        <Background
          borderRadius="none"
          backgroundColor="white"
          paddingY="xs"
          // paddingTop="sm"
          className="graph-container border-meow-meow"
        >
          <LineGraph
            paddingTop="md"
            axisTitle="Number of Employees"
            chartData={data}
            id="line-fixed-height"
            xAxisCategories={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
            ]}
            // height="40%"
            yAxisMin={0}
          />
        </Background>
      </Flex>
    </div>
  );
};
export default LineGraphLegend;
