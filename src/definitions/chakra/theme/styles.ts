import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
  styles: {
    global: {
      h1: {
        fontWeight: 500,
      },
      p: {
        fontWeight: 400,
        color: "white",
        fontFamily: "Raleway",
      },
      label: {
        color: "white",
      },
      input: {
        color: "white",
        backgroundColor: "transparent",
        border: "1px solid #11203F",
      },
    },
  },
} as GlobalStyles;
