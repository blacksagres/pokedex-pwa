import React, { useState } from "react";
import { styled } from "../../stitches.config";
import { PokeCard } from "./PokeCard";
import { PokeDialog } from "./PokeDialog";
import { StyledSummary } from "./PokeSummary";

const StyledGrid = styled("div", {
  padding: "1rem",
  position: "relative",

  md: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1rem"
  },
  lg: {
    gridTemplateColumns: "repeat(4, 1fr)"
  }
});

interface IPokeOverviewGridProps {
  pokemons: string[];
}

export const PokeOverviewGrid: React.FC<{ IPokeOverviewGridProps }> = (
  props
) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { pokemons } = props;

  return (
    <StyledGrid>
      <PokeDialog
        isOpen={openDialog}
        close={() => {
          setOpenDialog(false);
        }}
      />
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon}
          pokemonName={pokemon}
          onClick={() => setOpenDialog(true)}
        />
      ))}
    </StyledGrid>
  );
};
