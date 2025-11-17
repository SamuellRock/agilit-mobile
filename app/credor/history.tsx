// app/credor/history.tsx
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import LoanCard from "@/components/LoanCard";
import OfferCard from "@/components/OfferCard";
import { availableOffers, credorHistoricLoans } from "@/data/mockData";
import { formatCurrency } from "@/utils/format";

export default function CredorHistory() {
  const recovered = credorHistoricLoans.reduce((sum, loan) => sum + loan.amount, 0);

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <View className="rounded-3xl bg-dark-300 p-5 shadow-soft">
          <Text className="text-sm uppercase tracking-wide text-gray-400">Recuperado</Text>
          <Text className="text-3xl font-bold text-white">{formatCurrency(recovered)}</Text>
          <Text className="mt-1 text-sm text-gray-300">
            Baseada em 12 contratos finalizados no último trimestre.
          </Text>
        </View>

        <View className="mt-8">
          <Text className="mb-3 text-lg font-semibold text-white">Contratos</Text>
          {credorHistoricLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </View>

        <View className="mt-8 mb-8">
          <Text className="mb-3 text-lg font-semibold text-white">Ofertas replicáveis</Text>
          {availableOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} highlight="Modelo salvo" />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
