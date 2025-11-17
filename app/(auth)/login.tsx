// app/(auth)/login.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import UiButton from "@/components/UiButton";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password] = useState("ignored"); // in demo we don't use

  const doLogin = async () => {
    try {
      await login(email, password);
      // get user from storage or context
      router.replace("/"); // root will resolve to user's area via conditional check in index
    } catch (e: any) {
      Alert.alert("Erro", e.message || "Falha ao logar");
    }
  };

  return (
    <View className="flex-1 items-center justify-center px-6 bg-gray-50">
      <Text className="text-2xl font-bold mb-6">Bem-vindo ao Agilit Loan</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3" />

      <UiButton onPress={doLogin}>Entrar</UiButton>

      <Pressable onPress={() => router.push("/(auth)/signup")} className="mt-4">
        <Text className="text-blue-600">Criar conta</Text>
      </Pressable>
    </View>
  );
}
