import { Stack } from "expo-router"
import { Button } from "react-native-paper"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="activity"
        options={{
          title: "Add activity",
          headerRight: () => (
            <Button mode="contained" onPress={() => console.log("clicked")}>
              {"Save"}
            </Button>
          ),
        }}
      />
    </Stack>
  )
}
