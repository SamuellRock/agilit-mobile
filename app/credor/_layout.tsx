// app/credor/_layout.tsx
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import "../../global.css";

const tabBarOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#9BFF2A",
  tabBarInactiveTintColor: "#9CA3AF",
  tabBarStyle: {
    backgroundColor: "#101010",
    borderTopWidth: 0,
    paddingTop: 10,
    paddingBottom: 14,
    height: 70,
  },
  tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
};

export default function CredorLayout() {
  return (
    <Tabs screenOptions={tabBarOptions}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Painel",
          tabBarIcon: ({ color, size }) => <Feather name="activity" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="offer"
        options={{
          tabBarLabel: "Ofertas",
          tabBarIcon: ({ color, size }) => <Feather name="layers" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarLabel: "Histórico",
          tabBarIcon: ({ color, size }) => <Feather name="clock" color={color} size={size} />,
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
