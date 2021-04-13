import React from "react";
import {
  LineGraph,
  Flex,
  FlexItem,
  Title,
  Card,
  Nav,
  Background,
  StatChange,
  NavItem,
  Table,
  TableRow,
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
  { tab: "Canceled", change: 18 },
  { tab: "Repeat Sales" },
];

const LineGraphLegend = (props) => (
  <div className="first-component">
    <Flex orientation="row">
      <Card borderRadius="none" className="performance-tab ">
        <Flex orientation="row" spacing="between">
          <FlexItem>
            <Title size={4} tag="h4" text="Title 4" />
          </FlexItem>
          <FlexItem>...</FlexItem>
        </Flex>
      </Card>
    </Flex>

    {/* <Flex orientation="row">
      <div className="performance-tab">
        <Table size="md">
          <tbody>
            {keyPerformance.map((item, i) => (
              <TableRow
                sideHighlightColor={
                  item.tab !== "Revenue" ? "none" : "category_1"
                }
                className="row-height"
              >
                <td>
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

                      {item.change && item.change + "%"}
                    </div>
                  </Flex>
                </td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>

      <Background borderRadius="none">
        <LineGraph
          axisTitle="Number of Employees"
          chartData={data}
          id="line-fixed-height"
          className="line-graph-height"
          xAxisCategories={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          yAxisMin={0}
        />
      </Background>
    </Flex> */}
  </div>
);
export default LineGraphLegend;
