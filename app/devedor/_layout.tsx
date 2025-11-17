// app/devedor/_layout.tsx
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import "../../global.css";

const tabOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#9BFF2A",
  tabBarInactiveTintColor: "#A1A1AA",
  tabBarStyle: {
    backgroundColor: "#101010",
    borderTopWidth: 0,
    paddingTop: 10,
    paddingBottom: 20,
    height: 90,
    position: "absolute",
  },
  tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
};

export default function DevedorLayout() {
  return (
    <Tabs screenOptions={tabOptions}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Resumo",
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Explorar",
          tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
