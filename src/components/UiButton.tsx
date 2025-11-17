// src/components/UiButton.tsx
import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
};

export default function UiButton({ children, onPress, className = "" }: Props) {
  return (
    <Pressable onPress={onPress} className={`px-4 py-3 bg-blue-600 rounded-md ${className}`}>
      <Text className="text-white text-center font-semibold">{children}</Text>
    </Pressable>
  );
}
