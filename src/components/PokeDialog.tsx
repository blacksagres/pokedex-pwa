import React from "react";
import ReactDOM from "react-dom";
import { styled } from "../../stitches.config";

const Overlay = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  display: "block",

  height: "100vh",
  width: "100vw",

  backgroundColor: "rgba(0, 0, 0, .6)",

  variants: {
    open: {
      false: {
        display: "none"
      }
    }
  }
});

interface IPokeDialogProps {
  open: boolean;
}

export const PokeDialog: React.FC<IPokeDialogProps> = (props) => {
  console.log({ props });
  return ReactDOM.createPortal(
    <Overlay open={props.open} />,
    document.querySelector("#modal-root")
  );
};
