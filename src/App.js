import React from "react";
import { Selectorino } from "./components/Selectorino";
import { SwordAndShieldLoader } from "./components/SwordShieldLoader";

import "./styles/main.scss";

export default function App() {
  return (
    <SwordAndShieldLoader
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    />
  );
}
