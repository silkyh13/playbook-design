import React, { useLayoutEffect, useState } from "react";
import { Body, Icon } from "playbook-ui";
import NavBar from "./Home/NavBar";
import Tab from "./Home/Tab";
import DashBoard from "./Home/Dashboard";
import "./styles.scss";

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

export default function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="App">
      <NavBar width={width} />
      <Tab width={width} />
      <DashBoard width={width} />
    </div>
  );
}
