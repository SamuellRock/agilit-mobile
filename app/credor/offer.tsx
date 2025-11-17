// app/credor/offer.tsx
import OfferCard from "@/components/OfferCard";
import UiButton from "@/components/UiButton";
import { availableOffers } from "@/data/mockData";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OfferScreen() {
  const router = useRouter();

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
        <View className="rounded-3xl bg-dark-300 p-5 shadow-soft">
          <Text className="text-sm uppercase tracking-wide text-gray-400">
            Playbook
          </Text>
          <Text className="text-3xl font-bold text-white">Minhas ofertas</Text>
          <Text className="mt-2 text-sm text-gray-300">
            Ajuste percentual e parcelas de acordo com o contexto informado pelo
            Ricardo.
          </Text>

          <UiButton
            className="mt-5"
            onPress={() => router.push("/credor/create-offer")}
          >
            + Criar nova oferta
          </UiButton>
        </View>

        <View className="mt-8 gap-4">
          {availableOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              actionLabel="Ver detalhes"
              onPress={() => router.push(`/credor/offer/${offer.id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
