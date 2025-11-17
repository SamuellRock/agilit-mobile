// app/index.tsx
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function Root() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.replace("/(auth)/login");
      else router.replace(user.role === "credor" ? "/credor" : "/devedor");
    }
  }, [loading, user]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-dark-500">
      <View className="items-center gap-3">
        <ActivityIndicator color="#9BFF2A" />
        <Text className="text-sm text-gray-300">Sincronizando dados do Samuel…</Text>
      </View>
    </SafeAreaView>
  );
}
