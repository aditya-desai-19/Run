import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: () => <Ionicons name="analytics" size={24} />,
        }}
      />
    </Tabs>
  )
}
