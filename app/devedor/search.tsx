// app/devedor/search.tsx
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import OfferCard from "@/components/OfferCard";
import { useRouter } from "expo-router";

export default function Search() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4">Buscar Ofertas</Text>
      <OfferCard title="Oferta R$1000 - 5% a.m." subtitle="Parcelado: Sim" />
      <OfferCard title="Oferta R$500 - 3% a.m." subtitle="Parcelado: Não" />
      <Pressable onPress={() => {/* simulate interest */ router.push('/credor/history') } } className="mt-4">
        <Text className="text-blue-600">Quero esta oferta (notifica credor)</Text>
      </Pressable>
    </ScrollView>
  );
}
