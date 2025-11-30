import { ComponentType } from "react"
import { View } from "react-native"
import { Divider } from "react-native-paper"

export default function withDivider<P extends object>(
  Component: ComponentType<P>
) {
  return function withDivider(props: P) {
    return (
      <View style={{ width: "100%" }}>
        <Divider />
        <Component {...props} />
        <Divider />
      </View>
    )
  }
}
