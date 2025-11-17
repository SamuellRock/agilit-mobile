// app/(auth)/signup.tsx
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import UiButton from "@/components/UiButton";
import InputField from "@/components/InputField";

export default function Signup() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState<"credor" | "devedor">("devedor");
  const [submitting, setSubmitting] = useState(false);

  const doSignup = async () => {
    try {
      setSubmitting(true);
      await signup(name.trim(), email.trim(), "ignored", role);
      router.replace(role === "credor" ? "/credor" : "/devedor");
    } catch (e: any) {
      Alert.alert("Erro", e.message || "Falha no cadastro");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: undefined })}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="mt-12 space-y-2">
            <Text className="text-sm font-semibold uppercase tracking-wide text-primary">
              Boas-vindas
            </Text>
            <Text className="text-3xl font-bold text-white">Criar conta</Text>
            <Text className="text-base text-gray-300">
              Conectamos às propostas certas em poucos cliques.
            </Text>
          </View>

          <View className="mt-10 space-y-6">
            <InputField 
              label="Nome" 
              value={name} 
              onChangeText={setName} 
              placeholder="Nome Completo" 
            />
            <InputField
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="user@agilit.com"
            />
            <InputField
              label="Senha"
              secureTextEntry
              value={pass}
              onChangeText={setPass}
              placeholder="••••••••"
            />

            <View>
              <Text className="mb-3 text-sm font-semibold uppercase text-gray-400">Perfil</Text>
              <View className="flex-row gap-3">
                {(["credor", "devedor"] as const).map((item) => {
                  const isActive = role === item;
                  return (
                    <Pressable
                      key={item}
                      onPress={() => setRole(item)}
                      className={`flex-1 rounded-2xl border px-4 py-3 ${
                        isActive ? "border-primary bg-primary/10" : "border-white/10 bg-white/5"
                      }`}
                    >
                      <Text className="text-sm font-semibold text-white">
                        {item === "credor" ? "Quero ofertar Emprestimo" : "Quero Buscar Ofertas"}
                      </Text>
                      <Text className="text-xs text-gray-300">
                        {item === "credor"
                          ? "Controle seus emprestimos e alcance mais pessoas."
                          : "Encontre as melhores ofertas de emprestimo."}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>


            <View className="mt-10 space-y-8">
              <UiButton onPress={doSignup} loading={submitting} className="mb-4">
                Criar conta
              </UiButton>

              <UiButton variant="ghost" onPress={() => router.push("/(auth)/login")}>
                Voltar para login
              </UiButton>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
