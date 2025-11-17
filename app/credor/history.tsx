// app/credor/history.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import OfferCard from "@/components/OfferCard";

export default function CredorHistory() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4">Histórico de Ofertas</Text>
      <OfferCard title="Oferta R$1000 - 5% a.m." subtitle="Parcelado: Sim" />
      <OfferCard title="Oferta R$500 - 3% a.m." subtitle="Parcelado: Não" />
    </ScrollView>
  );
}
