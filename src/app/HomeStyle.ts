import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "@/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  passwordSection: {
    marginBottom: SPACING.lg,
  },

  settingsSection: {
    marginBottom: SPACING.lg,
  },

  strengthSection: {
    marginTop: SPACING.sm,
  },
});

export default styles;