// src/components/OfferCard.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";
import type { Offer } from "@/data/mockData";
import { formatCurrency, formatDate, formatPercentage } from "@/utils/format";

type Props = {
  offer: Offer;
  onPress?: () => void;
  actionLabel?: string;
  highlight?: string;
};

export default function OfferCard({ offer, onPress, actionLabel, highlight }: Props) {
  return (
    <Pressable onPress={onPress} className="mb-3 rounded-2xl bg-dark-300/90 p-4 shadow-card">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-lg font-semibold text-white">
          {formatCurrency(offer.amount)} · {offer.installments}x
        </Text>
        <Text className="text-sm font-semibold text-primary">{formatPercentage(offer.rate)}</Text>
      </View>

      {highlight ? <Text className="text-xs uppercase tracking-wide text-primary">{highlight}</Text> : null}
      <Text className="text-base text-white">{offer.profile}</Text>
      {/* <Text className="mt-1 text-sm text-gray-300">{offer.description}</Text> */}

      <View className="mt-3 flex-row flex-wrap gap-2">
        <View className="rounded-full bg-dark-200 px-3 py-1">
          <Text className="text-xs text-gray-200">Início {formatDate(offer.startDate)}</Text>
        </View>
        {/* {offer.tags?.map((tag) => (
          <View key={tag} className="rounded-full border border-white/10 px-3 py-1">
            <Text className="text-xs text-gray-100">{tag}</Text>
          </View>
        ))} */}
      </View>

      {actionLabel ? (
        <View className="mt-4 rounded-2xl bg-dark-200 px-4 py-2">
          <Text className="text-center text-sm font-semibold text-white">{actionLabel}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}
