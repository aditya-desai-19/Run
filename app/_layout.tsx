import { darkTheme, lightTheme } from "@/config/theme"
import { useActivityStore } from "@/zustand/store"
import { Stack, useRouter } from "expo-router"
import { useColorScheme } from "react-native"
import { Button } from "react-native-paper"
import { Provider as PaperProvider } from "react-native-paper"

export default function RootLayout() {
  //todo
  const { state } = useActivityStore()
  const scheme = useColorScheme()
  const router = useRouter()

  const onSave = () => {
    //todo
    console.log({ state })
    router.push("/(tabs)")
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
              <Button mode="contained" onPress={onSave}>
                {"Save"}
              </Button>
            ),
          }}
        />
      </Stack>
    </PaperProvider>
  )
}
