import { View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import { InputLabelProps } from "./types"
import withDivider from "./with-divider"

function InputLabelComponent({
  label,
  value,
  onChangeText,
  keyboardType,
  placeholder,
}: InputLabelProps) {
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
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={{ backgroundColor: "transparent" }}
      />
    </View>
  )
}

const InputLabel = withDivider(InputLabelComponent)
export default InputLabel
