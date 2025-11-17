// app/credor/settings.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "@/context/AuthContext";

export default function CredorSettings() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 p-4 bg-gray-50">
      <Text className="text-xl font-bold mb-4">Configurações</Text>
      <Text className="mb-2">Nome: {user?.name}</Text>
      <Text className="mb-2">Email: {user?.email}</Text>

      <Pressable onPress={() => logout()} className="mt-6 bg-red-500 px-4 py-2 rounded">
        <Text className="text-white">Sair</Text>
      </Pressable>
    </View>
  );
}
