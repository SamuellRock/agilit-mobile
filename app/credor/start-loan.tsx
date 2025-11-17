import React, { useMemo, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import InputField from "@/components/InputField";
import UiButton from "@/components/UiButton";
import { availableOffers } from "@/data/mockData";

export default function StartLoan() {
  const params = useLocalSearchParams<{ offer?: string }>();
  const router = useRouter();
  const selectedOffer = useMemo(
    () => availableOffers.find((offer) => offer.id === params.offer),
    [params.offer],
  );

  const [amount, setAmount] = useState(selectedOffer ? String(selectedOffer.amount) : "");
  const [rate, setRate] = useState(selectedOffer ? String(selectedOffer.rate) : "");
  const [installments, setInstallments] = useState(
    selectedOffer ? String(selectedOffer.installments) : "",
  );
  const [borrower, setBorrower] = useState("");

  const handleStart = () => {
    Alert.alert("Contrato encaminhado", "Samuel receberá o contrato para assinatura.");
    router.replace("/credor");
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <Text className="text-sm uppercase tracking-wide text-primary">Novo contrato</Text>
        <Text className="text-3xl font-bold text-white">Gerar empréstimo</Text>
        <Text className="mt-2 text-base text-gray-300">
          Revise os dados abaixo antes de enviar para o Samuel.
        </Text>

        <View className="mt-8 space-y-5">
          <InputField label="Tomador" value={borrower} onChangeText={setBorrower} placeholder="Nome completo" />
          <InputField label="Valor" value={amount} onChangeText={setAmount} keyboardType="numeric" />
          <InputField label="Juros ao mês (%)" value={rate} onChangeText={setRate} keyboardType="numeric" />
          <InputField label="Parcelas" value={installments} onChangeText={setInstallments} keyboardType="numeric" />
        </View>

        <View className="mt-8 flex-row gap-3 pb-10">
          <UiButton variant="secondary" className="flex-1" onPress={() => router.back()}>
            Voltar
          </UiButton>
          <UiButton className="flex-1" onPress={handleStart}>
            Enviar contrato
          </UiButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
