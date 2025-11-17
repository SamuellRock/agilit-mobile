// src/components/LoanCard.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export default function LoanCard({ title, subtitle, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="bg-white shadow p-4 rounded-lg mb-3">
      <Text className="text-lg font-semibold">{title}</Text>
      {subtitle ? <Text className="text-sm text-gray-500 mt-1">{subtitle}</Text> : null}
    </Pressable>
  );
}
