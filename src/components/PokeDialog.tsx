import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { styled } from "../../stitches.config";
import { PokeData } from "../definitions";
import {
  GameCard,
  GameCardHeader,
  GameCardContent,
  GameCardImage,
  GameCardInfo
} from "./containers/StyledGameCard";
import { TypeTagSwordAndShield } from "./TypeTagSwordShield";

const Overlay = styled(motion.div, {
  position: "fixed",
  top: "0",
  left: "0",
  display: "block",

  height: "100vh",
  width: "100vw",

  backgroundColor: "rgba(0, 0, 0, .6)"
});

const PokeDialogContainer = styled(motion.div, {
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
    <AnimatePresence>
      isOpen && (
      <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <PokeDialogContainer
          animate={{ opacity: 1, y: 50 }}
          exit={{ opacity: 0, y: 0 }}
        >
          <GameCard data-label="game-card">
            <GameCardHeader>
              #{pokemonData.id} {pokemonData.name}
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
              <GameCardInfo>
                <TypeTagSwordAndShield mode="row" types={pokemonData.types} />
                <h3>Strong versus</h3>
                <TypeTagSwordAndShield
                  mode="row"
                  types={[...pokemonData.types, ...pokemonData.types]}
                />
              </GameCardInfo>
            </GameCardContent>
          </GameCard>
        </PokeDialogContainer>
      </Overlay>
      )
    </AnimatePresence>,
    document.querySelector("#modal-root")
  );
};
