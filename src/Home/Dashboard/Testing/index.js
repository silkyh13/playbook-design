import React from "react";
import {
  IconStatValue,
  Card,
  Flex,
  FlexItem,
  SectionSeparator,
} from "playbook-ui";

// const GridRowFill = ({ data }) => (
//   <Card.Body
//   // padding="none"
//   >
//     <Flex
//       // horizontal="center"
//       spacing="evenly"
//       wrap
//     >
//       {data.map((line, i) => (
//         <>
//           <FlexItem
//             fixedSize="215px"
//             key={`grid-row-item-${line.icon}-${i}`}
//             margin="md"
//           >
//             <IconStatValue {...line} />
//           </FlexItem>
//           <SectionSeparator orientation="vertical" />
//         </>
//       ))}
//     </Flex>
//   </Card.Body>
// );

// const IconGrid = ({ gridData }) => (
//   <Card borderNone padding="none" shadow="deeper">
//     <GridRowFill data={gridData.slice(0, 2)} />
//     <SectionSeparator orientation="horizontal" />
//     <GridRowFill data={gridData.slice(2)} />
//   </Card>
// );

const IconStatValueColor = () => {
  const gridData = [
    {
      icon: "ticket-alt",
      variant: "green",
      size: "lg",
      text: "Tickets (YTD)",
      value: "1426.0",
    },
    {
      icon: "times-square",
      variant: "red",
      size: "lg",
      text: "Overdue",
      value: "25.0",
    },
    {
      icon: "tasks",
      variant: "teal",
      size: "lg",
      text: "Closed Without Action (YTD)",
      value: "97.0",
    },
    {
      icon: "exclamation-triangle",
      variant: "yellow",
      size: "lg",
      text: "Escalated (YTD)",
      value: "896.0",
    },
  ];

  return (
    <div>
      <Card padding="none">
        <Card.Body>{"Header"}</Card.Body>
        <SectionSeparator variant="card" />
        <Card.Body>so bad</Card.Body>
        <SectionSeparator variant="card" />
        <Card.Body>{"Footer"}</Card.Body>
      </Card>
    </div>
  );
};

export default IconStatValueColor;
