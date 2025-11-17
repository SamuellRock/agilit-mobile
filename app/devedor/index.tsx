// app/devedor/index.tsx
import React from "react";
import { ScrollView, Text } from "react-native";
import LoanCard from "@/components/LoanCard";

export default function DevedorHome() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4">Seus Empréstimos</Text>
      <LoanCard title="Empréstimo com Paulo — R$800" subtitle="Vence em 5 dias" />
    </ScrollView>
  );
}
