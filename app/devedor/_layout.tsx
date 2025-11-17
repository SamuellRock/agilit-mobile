// app/devedor/_layout.tsx
import { Tabs } from "expo-router";
import "../../global.css";

export default function DevedorLayout() {
  return <Tabs screenOptions={{ headerShown: false }} />;
}
