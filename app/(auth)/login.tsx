// app/(auth)/login.tsx
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import UiButton from "@/components/UiButton";
import InputField from "@/components/InputField";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const doLogin = async () => {
    try {
      setSubmitting(true);
      await login(email.trim(), password);
      router.replace("/");
    } catch (e: any) {
      Alert.alert("Erro", e.message || "Falha ao logar");
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
          <View className="mt-14 space-y-2">
            <Text className="text-sm font-semibold uppercase tracking-wide text-primary">
              Agilit Loan
            </Text>
            <Text className="text-3xl font-bold text-white">Entrar</Text>
            <Text className="text-base text-gray-300">
              Simplifique o dia do Samuel com indicadores claros e ofertas atualizadas.
            </Text>
          </View>

          <View className="mt-10 space-y-6">
            <InputField
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholder="samuel@agilit.com"
              helperText="Utilize o mesmo email registrado no onboarding."
            />

            <InputField
              label="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
            />

            <UiButton onPress={doLogin} loading={submitting}>
              Entrar
            </UiButton>

            <UiButton
              variant="ghost"
              onPress={() => router.push("/(auth)/signup")}
              className="border-white/10"
            >
              Criar conta
            </UiButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
