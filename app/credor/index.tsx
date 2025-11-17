// app/credor/index.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import LoanCard from "@/components/LoanCard";
import UiButton from "@/components/UiButton";
import OfferCard from "@/components/OfferCard";
import {
  activityTimeline,
  availableOffers,
  credorActiveLoans,
  credorHistoricLoans,
} from "@/data/mockData";
import { formatCurrency } from "@/utils/format";

export default function CredorHome() {
  const router = useRouter();
  const totalActive = credorActiveLoans.reduce((sum, loan) => sum + loan.amount, 0);
  const totalReceived = credorHistoricLoans.reduce((sum, loan) => sum + loan.amount, 0);

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <View className="rounded-3xl bg-dark-300 p-5 shadow-card">
          <Text className="text-sm uppercase tracking-wide text-gray-400">Carteira ativa</Text>
          <Text className="mt-1 text-4xl font-bold text-white">{formatCurrency(totalActive)}</Text>
          <Text className="mt-2 text-sm text-gray-300">
            Última atualização há 3 minutos. Samuel já respondeu 2 contatos hoje.
          </Text>

          <View className="mt-4 flex-row gap-3">
            <UiButton className="flex-1" onPress={() => router.push("/credor/offer")}>
              Criar oferta
            </UiButton>
            <UiButton variant="secondary" className="flex-1" onPress={() => router.push("/credor/history")}>
              Ver histórico
            </UiButton>
          </View>
        </View>

        <View className="mt-8">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-white">Em andamento</Text>
            <Text className="text-xs uppercase text-gray-400">{credorActiveLoans.length} contratos</Text>
          </View>
          {credorActiveLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} onPress={() => router.push(`/credor/offer/${loan.id}`)} />
          ))}
        </View>

        <View className="mt-6 rounded-3xl bg-white/5 p-5">
          <Text className="text-sm uppercase tracking-wide text-gray-400">Liquidados</Text>
          <Text className="text-2xl font-bold text-white">{formatCurrency(totalReceived)}</Text>
          <Text className="text-sm text-gray-300">Histórico favorece juros médios de 4,5% a.m.</Text>

          <View className="mt-4 space-y-3">
            {credorHistoricLoans.map((loan) => (
              <LoanCard key={loan.id} loan={loan} />
            ))}
          </View>
        </View>

        <View className="mt-8">
          <Text className="mb-3 text-lg font-semibold text-white">Ofertas em destaque</Text>
          {availableOffers.slice(0, 2).map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              highlight="em negociação"
              onPress={() => router.push(`/credor/offer/${offer.id}`)}
            />
          ))}
        </View>

        <View className="mt-8 mb-8 rounded-3xl bg-dark-300 p-5">
          <Text className="text-lg font-semibold text-white">Linha do tempo</Text>
          {activityTimeline.map((item) => (
            <View key={item.id} className="mt-4 border-l-2 border-primary/40 pl-4">
              <Text className="text-sm font-semibold text-white">{item.title}</Text>
              <Text className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleString("pt-BR")}</Text>
              <Text className="mt-1 text-sm text-gray-300">{item.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
