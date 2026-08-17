import { View, Text } from "react-native";
import { StrengthIndicatorProps } from "./types";
import styles from "./styles";
import { COLORS } from "@/Theme";

export default function StrengthIndicator({
  score,
  label,
}: StrengthIndicatorProps) {
  function getColor() {
    switch (label) {
      case "Weak":
        return COLORS.danger;

      case "Medium":
        return COLORS.warning;

      case "Strong":
        return COLORS.success;

      default:
        return COLORS.gray;
    }
  }

  const color = getColor();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Password Strength
      </Text>

      <View style={styles.bars}>
        {[1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              {
                backgroundColor:
                  index < Math.min(score, 4)
                    ? color
                    : COLORS.border,
              },
            ]}
          />
        ))}
      </View>

      <Text style={[styles.label, { color }]}>
        {label}
      </Text>
    </View>
  );
}