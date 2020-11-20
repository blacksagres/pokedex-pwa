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
    mode: {
      closed: {
        display: "none"
      }
    }
  }
});

interface IPokeDialogProps {
  isOpen: boolean;
  close: () => {};
}

export const PokeDialog: React.FC<IPokeDialogProps> = (props) => {
  const { isOpen, close } = props;

  return ReactDOM.createPortal(
    <Overlay mode={isOpen ? "open" : "closed"}>
      <button onClick={close}>Close</button>
    </Overlay>,
    document.querySelector("#modal-root")
  );
};
