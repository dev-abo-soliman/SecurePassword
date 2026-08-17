import { COLORS, FONT_SIZE, SPACING } from "@/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xl,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },

  logo: {
    fontSize: 26,
    marginRight: SPACING.sm,
  },

  appName: {
    fontSize: FONT_SIZE.xl,
    fontWeight: "700",
    color: COLORS.primary,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: SPACING.sm,
    fontSize: FONT_SIZE.md,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
});

export default styles;
