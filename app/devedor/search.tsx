// app/devedor/search.tsx
import React from "react";
import { Alert, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OfferCard from "@/components/OfferCard";
import { availableOffers } from "@/data/mockData";

export default function Search() {
  const handleInterest = (id: string) => {
    Alert.alert("Interesse enviado", `Notificamos os credores sobre a oferta ${id}.`);
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-500">
      <ScrollView className="flex-1 px-4 pt-4" contentInsetAdjustmentBehavior="automatic">
        <Text className="text-sm uppercase tracking-wide text-primary">Explorar</Text>
        <Text className="text-3xl font-bold text-white">Buscar ofertas</Text>
        <Text className="mt-2 text-base text-gray-300">
          Escolha a melhor oferta de emprestimo para você.
        </Text>

        <Text className="mt-12 text-sm uppercase text-gray-400">Recomendadas para você</Text>
        {availableOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            actionLabel="Tenho interesse"
            onPress={() => handleInterest(offer.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
