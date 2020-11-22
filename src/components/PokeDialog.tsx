import React from "react";
import ReactDOM from "react-dom";
import { styled } from "../../stitches.config";
import { PokeData } from "../definitions";
import { Card, CardContent, CardHeader } from "./containers/StyledCard";

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

const PokeDialogContainer = styled("div", {
  margin: "3rem",
  backgroundColor: "$card-bg",

  maxHeight: "100%",
  maxWidth: "100%",

  borderRadius: "$card"
});

interface IPokeDialogProps {
  isOpen: boolean;
  close: () => {};
  pokemonData: PokeData;
}

export const PokeDialog: React.FC<IPokeDialogProps> = (props) => {
  const { isOpen, close, pokemonData } = props;

  if (!pokemonData) return null;
  return ReactDOM.createPortal(
    <Overlay mode={isOpen ? "open" : "closed"}>
      <PokeDialogContainer>
        <Card cursor="auto">
          <CardHeader>
            {pokemonData.name} #{pokemonData.id}
            <button
              style={{
                position: "absolute",
                right: 10
              }}
              onClick={close}
            >
              Close
            </button>
          </CardHeader>
          <CardContent>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={pokemonData.sprites.front_default}
                style={{
                  display: "block",
                  height: "10rem"
                }}
                alt={pokemonData.name}
              />
            </div>
          </CardContent>
        </Card>
      </PokeDialogContainer>
    </Overlay>,
    document.querySelector("#modal-root")
  );
};
