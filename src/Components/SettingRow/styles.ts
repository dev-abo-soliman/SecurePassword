import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_SIZE,
  SPACING,
} from "@/Theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    backgroundColor: COLORS.surface,

    marginHorizontal: SPACING.lg,

    marginBottom: SPACING.md,

    paddingHorizontal: SPACING.lg,

    paddingVertical: SPACING.md,

    borderRadius: 14,
  },

  title: {
    fontSize: FONT_SIZE.md,

    fontWeight: "600",

    color: COLORS.text,
  },
});

export default styles;