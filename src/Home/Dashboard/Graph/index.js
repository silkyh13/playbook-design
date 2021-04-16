import React, { useEffect, useLayoutEffect, useState } from "react";
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
  Body,
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

const LineGraphLegend = ({ width }) => {
  var rows = [];
  for (var i = 0; i < keyPerformance.length; i++) {
    rows.push(
      <Card highlight={i == 0 && { position: "side", color: "windows" }}>
        <Flex orientation="row" justify="between">
          <Flex orientation="row" style={{ width: "100%" }}>
            {keyPerformance[i].tab}
          </Flex>
          <div
            className="data-status"
            data-status={keyPerformance[i].change > 0 ? "true" : "false"}
          >
            {keyPerformance[i].change > 0 ? (
              <i className="fas fa-arrow-up"></i>
            ) : keyPerformance[i].change < 0 ? (
              <i className="fas fa-arrow-down"></i>
            ) : (
              ""
            )}

            {keyPerformance[i].change &&
              Math.abs(keyPerformance[i].change) + "%"}
          </div>
        </Flex>
      </Card>
    );
  }
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

      <Flex
        orientation={width >= 946 ? "row" : "column"}
        className="second-row"
      >
        <div className={"performance-tab " + (width <= 946 && "small-tab")}>
          {width <= 946 ? (
            <Body marginTop={width <= 946 && "sm"}>{rows}</Body>
          ) : (
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
                    <td className="padding-tab" id={item.tab}>
                      <Flex orientation="horizontal" spacing="between">
                        <div
                          className={
                            "data-a " + (width < 1135 ? "desktop-2" : "")
                          }
                        >
                          {item.tab}
                        </div>
                        <div
                          className="data-status"
                          data-status={item.change > 0 ? "true" : "false"}
                        >
                          {item.change > 0 ? (
                            <i className="fas fa-arrow-up"></i>
                          ) : item.change < 0 ? (
                            <i className="fas fa-arrow-down"></i>
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
          )}
        </div>

        <Background
          marginTop={width <= 946 && "sm"}
          borderRadius="none"
          backgroundColor="white"
          paddingY="xs"
          // paddingTop="sm"
          className={
            "graph-container border-meow-meow " + (width <= 946 && "small-tab")
          }
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
            // height="30%"
            yAxisMin={0}
          />
        </Background>
      </Flex>
    </div>
  );
};
export default LineGraphLegend;
