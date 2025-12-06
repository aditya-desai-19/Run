import { View } from "react-native"
import { Text, TextInput, useTheme } from "react-native-paper"
import { DurationProps } from "./types"

export default function Duration({
  duration,
  onChangeDuration,
}: DurationProps) {
  const theme = useTheme()
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <Text variant="titleMedium">{"Duration"}</Text>
      <TextInput
        placeholder="In mins"
        keyboardType="decimal-pad"
        value={duration}
        onChangeText={onChangeDuration}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor={theme.colors.primary}
        style={{ backgroundColor: "transparent" }}
      />
    </View>
  )
}
