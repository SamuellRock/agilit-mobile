import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import UiButton from "@/components/UiButton";
import { availableOffers, credorActiveLoans } from "@/data/mockData";
import { formatCurrency, formatDate, formatPercentage } from "@/utils/format";

export default function OfferDetails() {
  const params = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();
  const offer = availableOffers.find((item) => item.id === params.id);
  const loan = credorActiveLoans.find((item) => item.id === params.id);

  const title = offer ? `Oferta #${offer.id}` : loan ? `Contrato #${loan.id}` : "Detalhes";

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <Text className="text-sm uppercase tracking-wide text-primary">Resumo</Text>
        <Text className="text-3xl font-bold text-white">{title}</Text>
        <Text className="mt-2 text-base text-gray-300">
          Visualize os dados usados pelo Samuel na última negociação.
        </Text>

        {offer ? (
          <View className="mt-8 rounded-3xl bg-dark-300 p-5 space-y-4">
            <DetailRow label="Valor" value={formatCurrency(offer.amount)} />
            <DetailRow label="Parcelas" value={`${offer.installments}x`} />
            <DetailRow label="Juros" value={formatPercentage(offer.rate)} />
            <DetailRow label="Início" value={formatDate(offer.startDate)} />
            <View>
              <Text className="text-xs uppercase text-gray-400">Perfil indicado</Text>
              <Text className="text-base text-white">{offer.profile}</Text>
            </View>
            <Text className="text-sm text-gray-300">{offer.description}</Text>
            <UiButton onPress={() => router.push(`/credor/start-loan?offer=${offer.id}`)}>
              Criar empréstimo
            </UiButton>
          </View>
        ) : null}

        {loan ? (
          <View className="mt-8 rounded-3xl bg-dark-300 p-5 space-y-4">
            <DetailRow label="Tomador" value={loan.counterparty} />
            <DetailRow label="Valor" value={formatCurrency(loan.amount)} />
            <DetailRow label="Vencimento" value={formatDate(loan.dueDate)} />
            <DetailRow label="Juros" value={formatPercentage(loan.rate)} />
            <Text className="text-sm text-gray-300">{loan.notes}</Text>
            <UiButton variant="secondary" onPress={() => router.back()}>
              Voltar
            </UiButton>
          </View>
        ) : null}

        {!offer && !loan ? (
          <View className="mt-10 rounded-3xl border border-white/10 p-6">
            <Text className="text-lg font-semibold text-white">Nada encontrado</Text>
            <Text className="mt-2 text-sm text-gray-300">
              Não conseguimos encontrar a referência informada. Retorne e tente novamente.
            </Text>
            <UiButton className="mt-5" onPress={() => router.back()}>
              Voltar
            </UiButton>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

type DetailProps = { label: string; value: string };

function DetailRow({ label, value }: DetailProps) {
  return (
    <View className="flex-row items-center justify-between border-b border-white/5 pb-2">
      <Text className="text-sm uppercase tracking-wide text-gray-500">{label}</Text>
      <Text className="text-base font-semibold text-white">{value}</Text>
    </View>
  );
}
