interface ColorDictionary {
  [key: string]: string;
}

export const typeColors: ColorDictionary = {
  normal: '#A8A77A',
  fire: '#ff9e54',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#d03e69',
  poison: '#A33EA1',
  ground: '#dc7743',
  flying: '#8fabe0',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#c8b88b',
  ghost: '#735797',
  dragon: '#026dc9',
  dark: '#705746',
  steel: '#5990a3',
  fairy: '#D685AD',
};

export const generateGradient = (
  colors: Array<string>
): { background: string } => {
  const [primary, secondary] = colors;

  if (!secondary) {
    return {
      // background: `linear-gradient(180deg, ${typeColors[primary]} 35%, rgba(255,255,255,1) 100%)`
      background: `${typeColors[primary]}`,
    };
  }

  return {
    background: `linear-gradient(120deg, ${typeColors[primary]} 0%, ${typeColors[secondary]} 100%)`,
  };
};
