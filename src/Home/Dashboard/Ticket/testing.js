import React from "react";
import {
  Flex,
  Layout,
  Caption,
  Title,
  SectionSeparator,
  FlexItem,
  Body,
  Table,
  TableRow,
  Background,
  Avatar,
  Badge,
  TextInput
} from "playbook-ui";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const Testing = ({ item }) => {
  let randomSize = Array(getRandomInt(1, 6)).fill("meow");
  let issue = [
    "Missing Part",
    "Not Performing",
    "Unexpected",
    "Unexpected Gibberish",
    "Need Technician"
  ];
  let user = [
    {
      name: "Patrick Welch",
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      name: "Lucille Sanchez",
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      name: "Beverly Reyes",
      imageUrl: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
      name: "Keith Craig",
      imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "Alicia Cooper",
      imageUrl: "https://randomuser.me/api/portraits/women/46.jpg"
    },
    {
      name: "Bubble Tea"
    },
    {
      name: "Red Velvet"
    }
  ];
  return (
    <div>
      <Background backgroundColor="white">
        <Table
          // container={false}
          // disableHover
          marginTop="md"
          // responsive="none"
          size="md"
        >
          <tbody>
            <TableRow sideHighlightColor={item.color}>
              <td>
                <Body>
                  <br />
                  <Flex justify="between">
                    <FlexItem>{item.title}</FlexItem>
                    <FlexItem>
                      <Badge text={item.number} rounded variant="primary" />
                    </FlexItem>
                  </Flex>
                  <br />
                </Body>
              </td>
            </TableRow>
            {randomSize.map((item) => {
              let who = user[getRandomInt(1, user.length)];
              return (
                <tr>
                  <td>
                    <Body>
                      <Flex></Flex>
                      <Avatar
                        imageAlt="Terry Johnson Standing"
                        imageUrl={who.imageUrl}
                        name={who.name}
                        size="xs"
                      />
                      <div>
                        {issue[getRandomInt(1, issue.length)].length > 9
                          ? `${issue[getRandomInt(1, issue.length)].slice(
                              0,
                              10
                            )}...`
                          : issue[getRandomInt(1, issue.length)]}
                      </div>
                    </Body>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Background>
    </div>
  );
};

export default Testing;
