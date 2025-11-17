// app/devedor/settings.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import UiButton from "@/components/UiButton";

export default function DevedorSettings() {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <Text className="text-sm uppercase tracking-wide text-primary">Preferências</Text>
        <Text className="text-3xl font-bold text-white">{user?.name || "Usuário"}</Text>
        <Text className="mt-1 text-base text-gray-300">Gerencie alertas, documentos e acesso rápido.</Text>

        <View className="mt-8 space-y-4">
          <InfoRow label="Email" value={user?.email || "-"} />
          <InfoRow label="Perfil" value="Devedor" />
          <InfoRow label="Alertas inteligentes" value="Ativos para atrasos e oportunidade" />
        </View>

        <View className="mt-10 mb-10">
          <UiButton variant="ghost" className="border border-white/10" onPress={logout}>
            Sair da conta
          </UiButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="rounded-2xl border border-white/10 p-4">
      <Text className="text-xs uppercase tracking-wide text-gray-400">{label}</Text>
      <Text className="text-base font-semibold text-white">{value}</Text>
    </View>
  );
}
