import { ViewStyle } from "react-native";

export const SHADOWS: Record<string, ViewStyle> = {
  card: {
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.1,

    shadowRadius: 10,

    elevation: 5,
  },
};