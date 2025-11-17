// app/credor/settings.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import UiButton from "@/components/UiButton";

export default function CredorSettings() {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <Text className="text-sm uppercase tracking-wide text-primary">Perfil</Text>
        <Text className="text-3xl font-bold text-white">{user?.name || "Usuário"}</Text>
        <Text className="mt-1 text-base text-gray-300">Acompanhe alertas e configure preferências.</Text>

        <View className="mt-8 space-y-4">
          <SettingRow label="Email" value={user?.email || "-"} />
          <SettingRow label="Perfil" value="Credor" />
          <SettingRow label="Notificações" value="Ativas para contato imediato" />
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

type Props = { label: string; value: string };

function SettingRow({ label, value }: Props) {
  return (
    <View className="rounded-2xl border border-white/10 p-4">
      <Text className="text-xs uppercase tracking-wide text-gray-400">{label}</Text>
      <Text className="text-base font-semibold text-white">{value}</Text>
    </View>
  );
}
