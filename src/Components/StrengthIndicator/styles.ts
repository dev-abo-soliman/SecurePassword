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

  title: {
    fontSize: FONT_SIZE.md,

    fontWeight: "600",

    color: COLORS.text,

    marginBottom: SPACING.md,
  },

  bars: {
    flexDirection: "row",

    gap: SPACING.sm,

    marginBottom: SPACING.md,
  },

  bar: {
    flex: 1,

    height: 8,

    borderRadius: RADIUS.full,
  },

  label: {
    fontSize: FONT_SIZE.md,

    fontWeight: "700",

    textAlign: "center",
  },
});

export default styles;