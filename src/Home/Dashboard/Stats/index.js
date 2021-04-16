import React from "react";
import {
  IconStatValue,
  Card,
  Flex,
  FlexItem,
  SectionSeparator,
} from "playbook-ui";

const GridRowFill = ({ data }) => (
  <Flex orientation="row">
    {data.map((line, i) => (
      <div key={i} className="stat-container">
        <Card borderRadius="none">
          <div
            className="stat-cards"
            key={`grid-row-item-${line.icon}-${i}`}
            // margin="lg"
          >
            <IconStatValue
              icon="frown"
              variant={line.variant}
              size={line.size}
              text={line.text}
              value={line.value}
              className="icon-stat-value"
            ></IconStatValue>
          </div>
        </Card>
      </div>
    ))}
  </Flex>
);

const IconGrid = ({ gridData }) => (
  <>
    <GridRowFill data={gridData.slice(0, 2)} />
    {/* <SectionSeparator orientation="horizontal" /> */}
    <GridRowFill data={gridData.slice(2)} />
  </>
);

const IconStatValueColor = (props) => {
  const ticketData = {
    gridData: [
      {
        icon: "ticket-alt",
        variant: "green",
        size: "md",
        text: "Tickets (YTD)",
        value: "1,426",
      },
      {
        icon: "times-square",
        variant: "red",
        size: "md",
        text: "Overdue (YTD)",
        value: "25",
      },
      {
        icon: "tasks",
        variant: "teal",
        size: "md",
        text: "Closed Without Action (YTD)",
        value: "97",
      },
      {
        icon: "exclamation-triangle",
        variant: "yellow",
        size: "md",
        text: "Escalated (YTD)",
        value: "896",
      },
    ],
  };
  return (
    <div>
      <IconGrid {...ticketData} />
    </div>
  );
};

export default IconStatValueColor;
