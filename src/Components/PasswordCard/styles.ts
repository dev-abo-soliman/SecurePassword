import { COLORS, FONT_SIZE, RADIUS, SHADOWS, SPACING } from "@/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,

    marginHorizontal: SPACING.lg,

    borderRadius: RADIUS.lg,

    padding: SPACING.lg,

    ...SHADOWS.card,
  },

  label: {
    fontSize: FONT_SIZE.sm,

    color: COLORS.textSecondary,

    marginBottom: SPACING.md,

    fontWeight: "600",
  },

  passwordRow: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  password: {
    flex: 1,

    fontSize: FONT_SIZE.lg,

    fontWeight: "700",

    color: COLORS.text,
  },

  copyButton: {
    marginLeft: SPACING.md,

    backgroundColor: COLORS.primary,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.sm,

    paddingHorizontal: SPACING.md,

    justifyContent: "center",

    alignItems: "center",
  },

  icon: {
    fontSize: 15,
  },

  generateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4F46E5",
    padding: 12,
    borderRadius: 10,
    marginTop:15,
  },

  generateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default styles;
