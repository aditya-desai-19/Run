import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import React from "react"
import { View } from "react-native"
import { IconButton } from "react-native-paper"

export default function Home() {
  const router = useRouter()

  const onPress = () => {
    router.push("/activity")
  }

  return (
    <View style={{ flex: 1 }}>
      <IconButton
        onPress={onPress}
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          borderColor: "black",
          borderWidth: 1,
          height: 60,
          width: 60,
          borderRadius: 35,
        }}
        icon={() => <Ionicons name="add" size={60} />}
      ></IconButton>
    </View>
  )
}
