import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import InputField from "@/components/InputField";
import UiButton from "@/components/UiButton";

export default function CreateOffer() {
  const router = useRouter();
  const [amount, setAmount] = useState("1500");
  const [rate, setRate] = useState("8");
  const [installments, setInstallments] = useState("3");
  const [profile, setProfile] = useState("Autônomos com histórico de recebíveis");
  const [description, setDescription] = useState("Oferta rápida para reforço de estoque.");

  const handleSubmit = () => {
    Alert.alert("Oferta salva", "A oferta ficará disponível para o Samuel testar.");
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <Text className="text-sm uppercase tracking-wide text-primary">Nova oferta</Text>
        <Text className="text-3xl font-bold text-white">Salvar rascunho</Text>
        <Text className="mt-2 text-base text-gray-300">
          Preencha o rascunho que será exibido instantaneamente para os usuários interessados.
        </Text>

        <View className="mt-8 space-y-5">
          <InputField
            label="Valor"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="1500"
          />
          <InputField
            label="Juros ao mês (%)"
            keyboardType="numeric"
            value={rate}
            onChangeText={setRate}
            placeholder="8"
          />
          <InputField
            label="Parcelas"
            keyboardType="numeric"
            value={installments}
            onChangeText={setInstallments}
            placeholder="3"
          />
          <InputField
            label="Perfil"
            value={profile}
            onChangeText={setProfile}
            placeholder="Tipo de cliente ideal"
            helperText="Exemplo: lojistas com faturamento recorrente."
          />
          <InputField
            label="Descrição"
            value={description}
            onChangeText={setDescription}
            placeholder="Explique os diferenciais"
            multiline
            numberOfLines={4}
            inputClassName="min-h-[96px]"
          />
        </View>

        <View className="mt-8 flex-row gap-3 pb-10">
          <UiButton variant="secondary" className="flex-1" onPress={() => router.back()}>
            Cancelar
          </UiButton>
          <UiButton className="flex-1" onPress={handleSubmit}>
            Publicar
          </UiButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
