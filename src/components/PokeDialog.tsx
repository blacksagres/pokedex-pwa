import React from "react";
import ReactDOM from "react-dom";
import { styled } from "../../stitches.config";
import { PokeData } from "../definitions";
import {
  GameCard,
  GameCardHeader,
  GameCardContent,
  GameCardImage
} from "./containers/StyledGameCard";
import { TypeTagSwordAndShield } from "./TypeTagSwordShield";

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
  margin: "3rem auto",
  backgroundColor: "$card-bg",
  maxWidth: "20rem",
  borderRadius: "$card",

  md: {
    maxWidth: "40rem"
  }
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
        <GameCard data-label="game-card">
          <GameCardHeader>
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
          </GameCardHeader>
          <GameCardContent>
            <GameCardImage
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%"
              }}
            >
              <TypeTagSwordAndShield types={pokemonData.types} />
            </div>
          </GameCardContent>
        </GameCard>
      </PokeDialogContainer>
    </Overlay>,
    document.querySelector("#modal-root")
  );
};
