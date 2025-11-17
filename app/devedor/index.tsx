// app/devedor/index.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoanCard from "@/components/LoanCard";
import { devedorActiveLoans } from "@/data/mockData";
import UiButton from "@/components/UiButton";
import { formatCurrency } from "@/utils/format";

export default function DevedorHome() {
  const nextPayment = devedorActiveLoans[0];

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <View className="rounded-3xl bg-dark-300 p-5 shadow-card">
          <Text className="text-sm uppercase tracking-wide text-gray-400">Próximo pagamento</Text>
          <Text className="text-2xl font-bold text-white">
            {nextPayment ? formatCurrency(nextPayment.amount / 2) : "-"}
          </Text>
          <Text className="mt-1 text-sm text-gray-300">
            Emprestimo pego com LUCIO CABRAL
          </Text>
          <UiButton className="mt-5" variant="secondary">
            Registrar Pagamento
          </UiButton>
        </View>

        <View className="mt-8">
          <Text className="mb-3 text-lg font-semibold text-white">Em andamento</Text>
          {devedorActiveLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} role="devedor" />
          ))}
        </View>

        <View className="mt-8 mb-10 rounded-3xl border border-white/10 p-5">
          {/* <Text className="text-lg font-semibold text-white">Checklist</Text>
          <Text className="mt-1 text-sm text-gray-300">
            Antecipe documentos e habilite ofertas com taxas menores.
          </Text>
          <View className="mt-4">
            <ChecklistItem label="Extrato atualizado enviado" done />
            <ChecklistItem label="Proposta de renegociação" />
            <ChecklistItem label="Garantia adicional cadastrada" />
          </View> */}
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

// function ChecklistItem({ label, done = false }: { label: string; done?: boolean }) {
//   return (
//     <View className="mb-3 flex-row items-center rounded-2xl border border-white/10 p-3">
//       <View className={`mr-3 h-5 w-5 rounded-full ${done ? "bg-primary" : "border border-white/20"}`} />
//       <Text className={`text-sm ${done ? "text-white" : "text-gray-400"}`}>{label}</Text>
//     </View>
//   );
// }
