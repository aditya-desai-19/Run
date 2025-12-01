import { View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import { DurationProps } from "./types"

export default function Duration({
  duration,
  onChangeDuration,
}: DurationProps) {
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
        activeOutlineColor="transparent"
        activeUnderlineColor="transparent"
        style={{ backgroundColor: "transparent" }}
      />
    </View>
  )
}
