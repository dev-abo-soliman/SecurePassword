import * as Clipboard from "expo-clipboard";
import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/Components/Header/Header";
import LengthSlider from "@/Components/LengthSlider/LengthSlider";
import PasswordCard from "@/Components/PasswordCard/PasswordCard";
import StrengthIndicator from "@/Components/StrengthIndicator/StrengthIndicator";

import { generatePassword } from "@/Services/password/passwordGenerator";
import { calculatePasswordStrength } from "@/Services/strength/passwordStrength";
import { PasswordStrengthResult } from "@/Services/strength/types";

import SettingRow from "@/Components/SettingRow";
import styles from "./HomeStyle";

export default function HomeScreen() {
  const [length, setLength] = useState(14);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const [password, setPassword] = useState("");

  const [strength, setStrength] = useState<PasswordStrengthResult>({
    score: 0,
    label: "Weak",
  });

  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });

    const newStrength = calculatePasswordStrength(newPassword);

    setPassword(newPassword);
    setStrength(newStrength);
  }

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
  }

  function handleUppercaseChange(value: boolean) {
    if (!value && !lowercase && !numbers && !symbols) {
      Alert.alert(
        "Invalid Selection",
        "Please enable at least one character type.",
      );
      return;
    }

    setUppercase(value);
  }

  function handleLowercaseChange(value: boolean) {
    if (!value && !uppercase && !numbers && !symbols) {
      Alert.alert(
        "Invalid Selection",
        "Please enable at least one character type.",
      );
      return;
    }

    setLowercase(value);
  }

  function handleNumbersChange(value: boolean) {
    if (!value && !uppercase && !lowercase && !symbols) {
      Alert.alert(
        "Invalid Selection",
        "Please enable at least one character type.",
      );
      return;
    }

    setNumbers(value);
  }

  function handleSymbolsChange(value: boolean) {
    if (!value && !uppercase && !lowercase && !numbers) {
      Alert.alert(
        "Invalid Selection",
        "Please enable at least one character type.",
      );
      return;
    }

    setSymbols(value);
  }

  useEffect(() => {
    handleGeneratePassword();
  }, [length, uppercase, lowercase, numbers, symbols]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.passwordSection}>
          <PasswordCard
            password={password}
            onCopy={handleCopyPassword}
            onRefresh={handleGeneratePassword}
          />
        </View>

        <View style={styles.settingsSection}>
          <LengthSlider value={length} onValueChange={setLength} />

          <SettingRow
            title="Include Uppercase"
            value={uppercase}
            onValueChange={handleUppercaseChange}
          />

          <SettingRow
            title="Include Lowercase"
            value={lowercase}
            onValueChange={handleLowercaseChange}
          />

          <SettingRow
            title="Include Numbers"
            value={numbers}
            onValueChange={handleNumbersChange}
          />

          <SettingRow
            title="Include Symbols"
            value={symbols}
            onValueChange={handleSymbolsChange}
          />
        </View>

        <View style={styles.strengthSection}>
          <StrengthIndicator score={strength.score} label={strength.label} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
