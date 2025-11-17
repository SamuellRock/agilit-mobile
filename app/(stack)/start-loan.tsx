import InputField from "@/components/InputField";
import UiButton from "@/components/UiButton";
import { availableOffers } from "@/data/mockData";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StartLoan() {
  const params = useLocalSearchParams<{ offer?: string }>();
  const router = useRouter();
  const selectedOffer = useMemo(
    () => availableOffers.find((offer) => offer.id === params.offer),
    [params.offer]
  );

  const [amount, setAmount] = useState(
    selectedOffer ? String(selectedOffer.amount) : ""
  );
  const [rate, setRate] = useState(
    selectedOffer ? String(selectedOffer.rate) : ""
  );
  const [installments, setInstallments] = useState(
    selectedOffer ? String(selectedOffer.installments) : ""
  );
  const [borrower, setBorrower] = useState("");

  const handleStart = () => {
    Alert.alert(
      "Contrato encaminhado",
      "Usuário receberá o contrato para assinatura."
    );
    router.replace("/credor");
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 32,
        }}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-xl self-center">
          <Text className="text-sm uppercase tracking-wide text-primary">
            Novo contrato
          </Text>
          <Text className="text-3xl font-bold text-white">
            Gerar empréstimo
          </Text>
          <Text className="mt-2 text-base text-gray-300">
            Revise os dados abaixo antes de enviar para o Samuel.
          </Text>

          <View className="mt-8 space-y-5">
            <InputField
              label="Tomador"
              value={borrower}
              onChangeText={setBorrower}
              placeholder="Nome completo"
            />
            <InputField
              label="Valor"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <InputField
              label="Juros ao mês (%)"
              value={rate}
              onChangeText={setRate}
              keyboardType="numeric"
            />
            <InputField
              label="Parcelas"
              value={installments}
              onChangeText={setInstallments}
              keyboardType="numeric"
            />
          </View>

          <View className="mt-8 gap-3 pb-6">
            <UiButton
              variant="secondary"
              className="w-full"
              onPress={() => router.back()}
            >
              Voltar
            </UiButton>
            <UiButton className="w-full" onPress={handleStart}>
              Enviar contrato
            </UiButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
