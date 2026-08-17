import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_SIZE,
  RADIUS,
  SPACING,
} from "@/Theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,

    marginHorizontal: SPACING.lg,

    marginBottom: SPACING.lg,

    padding: SPACING.lg,

    borderRadius: RADIUS.lg,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: SPACING.md,
  },

  title: {
    fontSize: FONT_SIZE.md,

    fontWeight: "600",

    color: COLORS.text,
  },

  value: {
    fontSize: FONT_SIZE.lg,

    fontWeight: "700",

    color: COLORS.primary,
  },

  slider: {
    width: "100%",
    height: 40,
  },
});

export default styles;