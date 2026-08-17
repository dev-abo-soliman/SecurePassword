import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";
import styles from "./styles";
import { LengthSliderProps } from "./types";
import { COLORS } from "@/Theme";

export default function LengthSlider({
  value,
  onValueChange,
}: LengthSliderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Password Length
        </Text>

        <Text style={styles.value}>
          {value}
        </Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={6}
        maximumValue={32}
        step={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={COLORS.primary}
        maximumTrackTintColor={COLORS.border}
        thumbTintColor={COLORS.primary}
      />
    </View>
  );
}