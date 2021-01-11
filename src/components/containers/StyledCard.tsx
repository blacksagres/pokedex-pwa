import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

export const Card = styled(motion.div, {
  borderRadius: "$card",

  transition: "box-shadow .150s ease-in-out",
  boxShadow: ".25rem .25rem .25rem 1px rgba(0, 0, 0, .2)",

  backgroundColor: "$card-bg",
  cursor: "pointer",

  ":hover": {
    boxShadow: ".25rem .25rem .75rem 1px rgba(0, 0, 0, .3)"
  },

  // When in row mode
  ":not(:last-child)": {
    marginBottom: "1rem"
  },

  // When in grid mode
  md: {
    ":not(:last-child)": {
      marginBottom: 0
    }
  },

  variants: {
    cursor: {
      auto: {
        cursor: "auto"
      }
    }
  }
});

export const CardContent = styled(motion.div, {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-between",
  padding: "0 1rem",

  variants: {
    mode: {
      column: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    }
  }
});

export const CardHeader = styled(motion.div, {
  position: "relative",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",

  padding: ".3rem 0",

  backgroundColor: "silver",
  borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem",

  md: {
    padding: ".5rem 0"
  }
});
