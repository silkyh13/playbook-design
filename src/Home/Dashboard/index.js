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
  Layout
} from "playbook-ui";
import Ticket from "./Ticket";
import Graph from "./Graph";
import Stats from "./Stats";
const trendingStories = [
  {
    headerColor: "category_1",
    headerText: "Finance",
    imageUrl:
      "https://p-a6fbdk.t4.n0.cdn.getcloudapp.com/items/jkuYZ6rB/readit_image_1.png",
    cardText:
      "IRS will allow employers to match their employees' student loan...",
    icon: "dollar-sign",
    variant: "green",
    subReadit: "r/PersonalFinance and more"
  },
  {
    headerColor: "category_2",
    headerText: "World News",
    imageUrl:
      "https://p-a6fbdk.t4.n0.cdn.getcloudapp.com/items/wbuK75AO/readit_image_2.png",
    cardText: "Hong Kong democrat Ted Hui confirms he will go into exile...",
    icon: "globe",
    variant: "yellow",
    subReadit: "r/WorldNews and more"
  },
  {
    headerColor: "category_3",
    headerText: "Space",
    imageUrl:
      "https://p-a6fbdk.t4.n0.cdn.getcloudapp.com/items/geuooly9/readit_image_3.png",
    cardText: "Relaxing Inside the Space Station's Window to the World...",
    icon: "space-shuttle",
    variant: "blue",
    subReadit: "r/Space and more"
  },
  {
    headerColor: "category_4",
    headerText: "Tech",
    imageUrl:
      "https://p-a6fbdk.t4.n0.cdn.getcloudapp.com/items/WnulJpwd/readit_image_4.png",
    cardText: "MIT programmed AI that can design its own robots...",
    icon: "microchip",
    variant: "royal",
    subReadit: "r/Technology and more"
  }
];

const Dashboard = (props) => {
  return (
    <div>
      <Flex orientation="column" padding="xl" vertical="center" gap="sm">
        {/* already a flexitem */}
        <Graph />
        <FlexItem>
          <Ticket />
        </FlexItem>
      </Flex>
    </div>
  );
};

export default Dashboard;

{
  /* <div className="trending-section">

<div horizontal="left">
  <Caption text="Dashboard" paddingTop="lg" color="light" />
</div>
<div>
  <Title size={1} text="Commerce Dashboard" />
</div>
<div>
  <Graph />
  <Ticket />
  <Stats />
</div>
</div> */
}
