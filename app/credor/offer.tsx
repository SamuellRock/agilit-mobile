// app/credor/offer.tsx
import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function OfferScreen() {
  const router = useRouter();

  // dados simulados enquanto o backend não existe
  const [offers] = useState([
    {
      id: "1",
      value: 1500,
      interest: 8,
      parcels: 3,
      start: "10/11/2025",
    },
    {
      id: "2",
      value: 800,
      interest: 12,
      parcels: 1,
      start: "15/11/2025",
    },
  ]);

  return (
    <View className="flex-1 bg-dark-400 px-screen pt-10">
      {/* HEADER */}
      <Text className="text-title text-primary font-bold mb-4">
        Minhas Ofertas
      </Text>

      {/* BOTÃO CRIAR OFERTA */}
      <Pressable
        onPress={() => router.push("/credor/create-offer")}
        className="w-full bg-primary rounded-smooth py-3 mb-4 shadow-neon"
      >
        <Text className="text-center text-dark-500 font-bold text-lg">
          + Criar Nova Oferta
        </Text>
      </Pressable>

      {/* LISTA DE OFERTAS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {offers.map((offer) => (
          <Pressable
            key={offer.id}
            onPress={() => router.push(`/credor/offer/${offer.id}`)}
            className="bg-dark-300 rounded-xl3 p-card mb-4 shadow-card"
          >
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-white text-lg font-semibold">
                Oferta #{offer.id}
              </Text>
              <Text className="text-primary font-bold">
                {offer.interest}% juros
              </Text>
            </View>

            <View className="flex-row justify-between mt-2">
              <Text className="text-graysoft-200 text-base">
                Valor:
                <Text className="text-primary"> R$ {offer.value}</Text>
              </Text>

              <Text className="text-graysoft-200 text-base">
                Parcelas:
                <Text className="text-primary"> {offer.parcels}x</Text>
              </Text>
            </View>

            <Text className="text-graysoft-200 mt-2">
              Primeira parcela em{" "}
              <Text className="text-accent-purple">{offer.start}</Text>
            </Text>

            {/* Botão Criar Empréstimo */}
            <Pressable
              onPress={() =>
                router.push(`/credor/start-loan?offer=${offer.id}`)
              }
              className="mt-4 bg-primary rounded-xl2 py-2"
            >
              <Text className="text-center text-dark-500 font-bold">
                Criar Empréstimo
              </Text>
            </Pressable>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

