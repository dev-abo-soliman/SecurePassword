import { COLORS } from "@/Theme";
import { Switch, Text, View } from "react-native";
import styles from "./styles";
import { SettingRowProps } from "./ types";

export default function SettingRow({
  title,
  value,
  onValueChange,
}: SettingRowProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: COLORS.border,
          true: COLORS.primary,
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}
