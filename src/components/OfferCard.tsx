// src/components/OfferCard.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = { title: string; subtitle?: string; onPress?: () => void };

export default function OfferCard({ title, subtitle, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="bg-white p-4 rounded-lg shadow mb-3">
      <Text className="font-semibold">{title}</Text>
      {subtitle ? <Text className="text-sm text-gray-500 mt-1">{subtitle}</Text> : null}
    </Pressable>
  );
}
