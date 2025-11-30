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
      <Text>{"Duration"}</Text>
      <TextInput
        placeholder="In mins"
        keyboardType="decimal-pad"
        value={duration}
        onChangeText={onChangeDuration}
      />
    </View>
  )
}
