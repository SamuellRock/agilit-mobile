// app/(auth)/signup.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Alert, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import UiButton from "@/components/UiButton";

export default function Signup() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"credor" | "devedor">("devedor");

  const doSignup = async () => {
    try {
      await signup(name, email, "ignored", role);
      // redirect to role home
      router.replace(role === "credor" ? "/credor" : "/devedor");
    } catch (e: any) {
      Alert.alert("Erro", e.message || "Falha no cadastro");
    }
  };

  return (
    <View className="flex-1 items-center justify-center px-6 bg-gray-50">
      <Text className="text-2xl font-bold mb-6">Criar Conta</Text>

      <TextInput placeholder="Nome" value={name} onChangeText={setName}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3" />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3" />

      <View className="flex-row space-x-3 mb-4">
        <Pressable onPress={() => setRole("credor")}
          className={`px-3 py-2 rounded ${role === "credor" ? "bg-blue-600" : "bg-gray-200"}`}>
          <Text className={`${role === "credor" ? "text-white" : "text-black"}`}>Interesse em ofertar empréstimos</Text>
        </Pressable>
        <Pressable onPress={() => setRole("devedor")}
          className={`px-3 py-2 rounded ${role === "devedor" ? "bg-blue-600" : "bg-gray-200"}`}>
          <Text className={`${role === "devedor" ? "text-white" : "text-black"}`}>Interesse em pegar empréstimos</Text>
        </Pressable>
      </View>

      <UiButton onPress={doSignup}>Criar conta</UiButton>
    </View>
  );
}
