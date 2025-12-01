import { darkTheme, lightTheme } from "@/config/theme"
import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { Button } from "react-native-paper"
import { Provider as PaperProvider } from "react-native-paper"

export default function RootLayout() {
  //todo
  const scheme = useColorScheme()

  return (
    <PaperProvider theme={lightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="activity"
          options={{
            title: "",
            headerRight: () => (
              <Button mode="contained" onPress={() => console.log("clicked")}>
                {"Save"}
              </Button>
            ),
          }}
        />
      </Stack>
    </PaperProvider>
  )
}
