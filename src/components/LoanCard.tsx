// src/components/LoanCard.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";
import type { Loan } from "@/data/mockData";
import { formatCurrency, formatDate, formatPercentage } from "@/utils/format";

type Props = {
  loan: Loan;
  role?: "credor" | "devedor";
  onPress?: () => void;
};

const statusStyles = {
  open: {
    label: "Em andamento",
    containerClass: "bg-primary/15 border border-primary/20",
    textClass: "text-primary",
  },
  late: {
    label: "Atenção",
    containerClass: "bg-red-500/15 border border-red-500/20",
    textClass: "text-red-500",
  },
  paid: {
    label: "Quitado",
    containerClass: "bg-emerald-500/15 border border-emerald-500/20",
    textClass: "text-emerald-500",
  },
} as const;

export default function LoanCard({ loan, role = "credor", onPress }: Props) {
  const { label, containerClass, textClass } = statusStyles[loan.status];
  const personLabel = role === "credor" ? "Tomador" : "Credor";

  return (
    <Pressable onPress={onPress} className="mb-3 rounded-2xl bg-white/95 p-4 shadow-soft">
      <View className="mb-3 flex-row items-center justify-between">
        <View>
          <Text className="text-xs uppercase tracking-wide text-gray-400">{personLabel}</Text>
          <Text className="text-lg font-semibold text-gray-900">{loan.counterparty}</Text>
        </View>
        <View className={`rounded-full px-3 py-1 ${containerClass}`}>
          <Text className={`text-xs font-semibold uppercase ${textClass}`}>{label}</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-xs text-gray-400">Valor contratado</Text>
          <Text className="text-2xl font-bold text-gray-900">{formatCurrency(loan.amount)}</Text>
        </View>
        <View className="items-end">
          <Text className="text-xs text-gray-400">Vencimento</Text>
          <Text className="text-base font-semibold text-gray-900">{formatDate(loan.dueDate)}</Text>
          <Text className="text-xs text-gray-500 mt-1">{formatPercentage(loan.rate)}</Text>
        </View>
      </View>

      <Text className="mt-3 text-sm text-gray-600">{loan.notes}</Text>
    </Pressable>
  );
}
