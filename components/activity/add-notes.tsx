import { Divider, TextInput } from "react-native-paper"
import { AddNotesProps } from "./types"

export default function AddNotes({ value, onChangeText }: AddNotesProps) {
  return (
    <>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Add notes"
        multiline
        underlineColor="transparent"
        activeOutlineColor="transparent"
        activeUnderlineColor="transparent"
        style={{ backgroundColor: "transparent", paddingVertical: 16 }}
      />
      <Divider />
    </>
  )
}
