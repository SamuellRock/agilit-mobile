// app/credor/_layout.tsx
import { Tabs } from "expo-router";
import "../../global.css";

export default function CredorLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* tabs are auto-registered from files in this folder */}
    </Tabs>
  );
}
