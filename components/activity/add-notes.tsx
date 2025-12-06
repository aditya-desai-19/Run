import { Divider, TextInput, useTheme } from "react-native-paper"
import { AddNotesProps } from "./types"

export default function AddNotes({ value, onChangeText }: AddNotesProps) {
  const theme = useTheme()
  return (
    <>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Add notes"
        multiline
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor={theme.colors.primary}
        style={{ backgroundColor: "transparent", paddingVertical: 16 }}
      />
      <Divider />
    </>
  )
}
