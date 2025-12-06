import { darkTheme, lightTheme } from "@/config/theme"
import { useActivityStore } from "@/zustand/store"
import { Stack, useRouter } from "expo-router"
import { useColorScheme } from "react-native"
import { Button } from "react-native-paper"
import { Provider as PaperProvider } from "react-native-paper"
import { addRunData } from "../db/queries/run-data.js"

export default function RootLayout() {
  //todo
  const { state, reset } = useActivityStore()
  const scheme = useColorScheme()
  const router = useRouter()

  const { title, time, date, distance, duration } = state
  const disableSave =
    title.length == 0 ||
    time.hours < 0 ||
    time.minutes < 0 ||
    date.length == 0 ||
    distance < 0 ||
    duration < 0

  const onSave = async () => {
    try {
      await addRunData(state)
      router.push("/(tabs)")
      reset()
    } catch (error) {
      console.log("Some error occurred")
    }
  }

  return (
    <PaperProvider theme={lightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="activity"
          options={{
            title: "",
            headerRight: () => (
              <Button mode="contained" onPress={onSave} disabled={disableSave}>
                {"Save"}
              </Button>
            ),
          }}
        />
      </Stack>
    </PaperProvider>
  )
}
