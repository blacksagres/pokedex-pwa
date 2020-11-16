interface PokeType {
  slot: string;
  type: {
    name: string;
    url: string;
  };
}

interface PokeData {
  name: string;
  sprites: {
    front_default: "string";
  };
  types: Array<PokeType>;
}

export default PokeData;
