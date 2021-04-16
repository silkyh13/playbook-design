import React, { useEffect, useState } from "react";
import {
  Flex,
  Icon,
  Card,
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
  Button,
} from "playbook-ui";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const Tickets = ({ item, width, i }) => {
  const [randomSize, setRandomSize] = useState([]);
  const [show, setShow] = useState(1);
  let issue = [
    "Missing Part",
    "Not Performing",
    "Issue",
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
  useEffect(() => {
    let meow = [];
    for (let i = 0; i < getRandomInt(1, 15); i++) {
      meow.push({
        user: user[getRandomInt(1, user.length)],
        issue: issue[getRandomInt(1, issue.length)],
      });
    }
    setRandomSize([...meow]);
  }, []);
  function updateDataTitle() {
    for (let i = 0; i < randomSize.length + 1; i++) {
      let b = document.getElementById(`${item.title} ${i}`);
      if (b) b.setAttribute("data-title", "");
    }
  }

  useEffect(() => {
    updateDataTitle();
  }, [width]);
  return (
    <FlexItem
      key={i}
      orientation="row"
      flex={1}
      className={width > 1300 ? "" : "ticket-flex-main-container"}
    >
      {width > 574 ? (
        <Table className="ticket-table">
          <tbody className="ticket-main-body">
            <TableRow
              sideHighlightColor={item.color}
              className="header-container"
            >
              <td className="header-container-a" id={`${item.title} 0`}>
                <div
                  className={"header-container-b " + (width > 1300 ? "a" : "b")}
                >
                  <div className="header-container-c">
                    <Flex>
                      <Caption text={item.title} className="header-caption" />
                    </Flex>

                    <Pill
                      text={item.number}
                      variant={item.color}
                      className="header-pill"
                    />
                  </div>
                </div>
              </td>
            </TableRow>
            {randomSize &&
              randomSize.map((elem, index) => {
                let who = elem.user;

                return (
                  <tr
                    key={index}
                    className={
                      "ticket-row " + (index > show * 3 && "disappear")
                    }
                  >
                    <td
                      className="ticket-data"
                      id={`${item.title} ${index + 1}`}
                    >
                      <Flex
                        orientation="row"
                        justify="around"
                        className="ticket-flex"
                      >
                        <FlexItem>
                          <Avatar
                            imageAlt="Terry Johnson Standing"
                            imageUrl={who.imageUrl}
                            name={who.name}
                            size="xs"
                          />
                        </FlexItem>
                        <div className="center-content">
                          <div className="elipsis">{elem.issue}</div>
                        </div>
                        <FlexItem>
                          <i className="fas fa-chevron-right"></i>
                        </FlexItem>
                      </Flex>
                    </td>
                  </tr>
                );
              })}

            <tr className="ticket-row">
              <td className="ticket-data button-row">
                <Flex
                  orientation="row"
                  justify="around"
                  className="ticket-flex"
                >
                  <Button
                    onClick={() => setShow(show + 1)}
                    text="Show More"
                    variant="link"
                  />
                </Flex>
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div>
          <Card highlight={{ position: "side", color: item.color }}>
            {item.title}
          </Card>

          {randomSize &&
            randomSize.map((elem, index) => {
              let who = elem.user;

              return (
                <Card key={index} className={index > show * 3 && "disappear"}>
                  <Flex
                    orientation="row"
                    justify="between"
                    // className="ticket-flex"
                  >
                    <FlexItem>
                      <Avatar
                        imageAlt="Terry Johnson Standing"
                        imageUrl={who.imageUrl}
                        name={who.name}
                        size="xs"
                      />
                    </FlexItem>
                    <div className="center-content">
                      <div className="elipsis light">{elem.issue}</div>
                    </div>
                    <FlexItem>
                      <i className="fas fa-chevron-right"></i>
                    </FlexItem>
                  </Flex>
                </Card>
              );
            })}
          <Card padding="sm">
            {/* <td className="ticket-data button-row"> */}
            <Flex orientation="row" justify="around">
              <Button
                onClick={() => setShow(show + 1)}
                text="Show More"
                variant="link"
              />
            </Flex>
            {/* </td> */}
          </Card>
        </div>
      )}
    </FlexItem>
  );
};

export default Tickets;
