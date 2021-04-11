import React, { useEffect } from "react";
import {
  Flex,
  Icon,
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
  Pill,
  TextInput,
} from "playbook-ui";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const Tickets = ({ item }) => {
  let randomSize = Array(getRandomInt(1, 6)).fill("meow");
  let issue = [
    "Missing Part",
    "Not Performing",
    "Unexpected",
    "Unexpected Gibberish",
    "Need Technician",
  ];
  let user = [
    {
      name: "Patrick Welch",
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Lucille Sanchez",
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Beverly Reyes",
      imageUrl: "https://randomuser.me/api/portraits/women/74.jpg",
    },
    {
      name: "Keith Craig",
      imageUrl: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: "Alicia Cooper",
      imageUrl: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      name: "Bubble Tea",
    },
    {
      name: "Red Velvet",
    },
  ];
  return (
    <FlexItem nowrap orientation="column" flex={1}>
      <Table
        className="ticket-table"
        // container={false}
        // disableHover
        // marginTop="md"
        // responsive="none"
        // size="md"
      >
        <tbody>
          <TableRow sideHighlightColor={item.color}>
            <td style={{ height: "60px" }}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "70%" }}>
                    <Caption text={item.title} />
                  </div>

                  <Pill text={item.number} variant={item.color} />
                </div>
              </div>
            </td>
          </TableRow>
          {randomSize.map((item, i) => {
            let who = user[getRandomInt(1, user.length)];
            return (
              <tr key={i}>
                <td>
                  <Body>
                    <Flex orientation="row" gap="xs" justify="around">
                      <FlexItem>
                        <Avatar
                          imageAlt="Terry Johnson Standing"
                          imageUrl={who.imageUrl}
                          name={who.name}
                          size="xs"
                        />
                      </FlexItem>
                      <FlexItem>
                        <div
                          className="elipsis"
                          style={{
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "104px",
                          }}
                        >
                          {issue[getRandomInt(1, issue.length)]}
                        </div>
                      </FlexItem>
                      <FlexItem>
                        <i class="fas fa-chevron-right"></i>
                      </FlexItem>
                    </Flex>
                  </Body>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </FlexItem>
  );
};

export default Tickets;
