/* @flow*/

import React from "react";
import { Body, Icon } from "playbook-ui";
import NavBar from "./Home/NavBar";
import Tab from "./Home/Tab";
import DashBoard from "./Home/Dashboard";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Tab />
      <DashBoard />
    </div>
  );
}
