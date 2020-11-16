import React, { useState } from "react";
import { styled } from "../../stitches.config";

const SelectorinoWrapper = styled("div", {
  cursor: "pointer",
  display: "inline-block",
  position: "relative",
  minWidth: "15rem",

  color: "white",
  backgroundColor: "#555",

  border: ".3rem solid white",

  padding: ".5rem",

  textDecoration: "none",
  appearance: "none",
  transition: "all 200ms ease",
  userSelect: "none",

  ":active": {
    // boxShadow: "0 .1rem red"
  },

  ":hover": {
    // boxShadow: "0 .1rem rgba(0, 0, 0, .12)"
    backgroundColor: "#777"
  },

  // needed to rely on classes here?
  "> div.selectorino-label": {
    "::after": {
      content: ">",
      display: "block"
    }
  },

  variants: {
    mode: {
      active: {
        backgroundColor: "#777"
      }
    }
  }
});

const SelectorinoItemWrapper = styled("div", {
  position: "absolute",
  backgroundColor: "black",

  transition: "opacity 200ms ease",

  variants: {
    mode: {
      inactive: {
        opacity: "0",
        pointerEvents: "none"
      }
    }
  }
});

const SelectorinoItem = styled("div", {
  cursor: "pointer",
  display: "inline-block",
  position: "relative",
  minWidth: "15rem",

  color: "white",
  backgroundColor: "#444",

  margin: "0 .3rem",
  marginBottom: ".3rem",

  ":first-child": {
    marginTop: ".3rem"
  },

  padding: ".5rem",

  textDecoration: "none",
  appearance: "none",
  transition: "all 200ms ease",
  userSelect: "none",

  ":active": {
    boxShadow: "0 .1rem red"
  },

  ":hover": {
    // boxShadow: "0 .1rem rgba(0, 0, 0, .12)"
    boxShadow: "0 .1rem red"
  }
});

export const Selectorino = (props) => {
  const [active, setActive] = useState(false);

  const data = [
    { value: "dante", label: "Dante" },
    { value: "virgil", label: "Virgil" },
    { value: "nero", label: "Nero" }
  ];

  return (
    <SelectorinoWrapper
      mode={active ? "active" : ""}
      onClick={(event) => {
        event.stopPropagation();
        setActive((prevState) => !prevState);
      }}
    >
      <div className="selectorino-label">Select</div>
      <SelectorinoItemWrapper mode={active ? "" : "inactive"}>
        {data.map((dataItem) => (
          <SelectorinoItem
            key={`item-${dataItem.value}`}
            data-value={dataItem.value}
            onClick={(event) => {
              console.log({ dataItem, dataValue: event.target.dataset.value });
            }}
          >
            {dataItem.label}
          </SelectorinoItem>
        ))}
      </SelectorinoItemWrapper>
    </SelectorinoWrapper>
  );
};
