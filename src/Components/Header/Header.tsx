import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "./Styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Text style={styles.logo}>
          <Ionicons
            name="lock-closed"
            size={80}
            color="#4F46E5"
            style={styles.logo}
          />
        </Text>
        <Text style={styles.appName}>SecurePass</Text>
      </View>

      <Text style={styles.title}>Password Generator</Text>

      <Text style={styles.subtitle}>Generate strong and secure passwords</Text>
    </View>
  );
}
