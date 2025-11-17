// app/credor/offer.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import UiButton from "@/components/UiButton";
import OfferCard from "@/components/OfferCard";
import { availableOffers } from "@/data/mockData";

export default function OfferScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <View className="rounded-3xl bg-dark-300 p-5 shadow-soft">
          <Text className="text-sm uppercase tracking-wide text-gray-400">Playbook</Text>
          <Text className="text-3xl font-bold text-white">Minhas ofertas</Text>
          <Text className="mt-2 text-sm text-gray-300">
            Ajuste percentual e parcelas de acordo com o contexto informado pelo Samuel.
          </Text>

          <UiButton className="mt-5" onPress={() => router.push("/credor/create-offer")}>
            + Criar nova oferta
          </UiButton>
        </View>

        <View className="mt-8">
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
