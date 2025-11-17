// app/credor/index.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import LoanCard from "@/components/LoanCard";
import UiButton from "@/components/UiButton";
import { useRouter } from "expo-router";

export default function CredorHome() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4">Painel - Empréstimos em destaque</Text>

      <LoanCard title="Empréstimo para João — R$1.000" subtitle="Venc: 2025-12-01" onPress={() => {}} />

      <Text className="text-lg font-semibold mt-6 mb-2">Histórico</Text>
      <LoanCard title="Empréstimo para Maria — R$500 (liquidado)" subtitle="Quitado em 2025-09-10" />
      <UiButton onPress={() => router.push("/credor/history")} className="mt-4">Ir para Histórico</UiButton>
    </ScrollView>
  );
}
