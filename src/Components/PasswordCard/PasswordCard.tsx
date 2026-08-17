import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { PasswordCardProps } from "./types";

export default function PasswordCard({
  password,
  onCopy,
  onRefresh,
}: PasswordCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Generated Password</Text>

      <View style={styles.passwordRow}>
        <Text style={styles.password} numberOfLines={1} ellipsizeMode="middle">
          {password}
        </Text>

        <Pressable style={styles.copyButton} onPress={onCopy}>
          <Text style={styles.icon}>
            <Ionicons
              name="copy-outline"
              size={24}
              color="#000"
              style={styles.icon}
            />
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.generateButton} onPress={onRefresh}>
        <Ionicons name="refresh" size={20} color="#fff" />
        <Text style={styles.generateButtonText}>Generate Password</Text>
      </Pressable>
    </View>
  );
}
