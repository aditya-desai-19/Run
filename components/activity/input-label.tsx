import { View } from "react-native"
import { Text, TextInput, useTheme } from "react-native-paper"
import { InputLabelProps } from "./types"
import withDivider from "./with-divider"

function InputLabelComponent({
  label,
  value,
  onChangeText,
  keyboardType,
  placeholder,
  isRequiredField,
  unit = "",
}: InputLabelProps) {
  const theme = useTheme()

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text variant="titleMedium">
        {label}
        {isRequiredField && <Text style={{ color: "red" }}>{"*"}</Text>}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor={theme.colors.primary}
        style={{ backgroundColor: "transparent" }}
        right={<TextInput.Affix text={` ${unit}`} />}
      />
    </View>
  )
}

const InputLabel = withDivider(InputLabelComponent)
export default InputLabel
