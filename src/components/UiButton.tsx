// src/components/UiButton.tsx
import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  disabled?: boolean;
};

const variants = {
  primary: "bg-primary",
  secondary: "bg-dark-300 border border-white/10",
  ghost: "bg-transparent border border-white/20",
};

export default function UiButton({
  children,
  onPress,
  className = "",
  variant = "primary",
  loading = false,
  disabled = false,
}: Props) {
  const textColor = variant === "primary" ? "text-dark-500" : variant === "secondary" ? "text-white" : "text-white";
  const baseClass = "px-4 py-3 rounded-2xl flex-row items-center justify-center";
  const variantClass = variants[variant];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={isDisabled ? undefined : onPress}
      className={`${baseClass} ${variantClass} ${isDisabled ? "opacity-60" : ""} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "#1a1a1a" : "#F3F4F6"} />
      ) : (
        <Text className={`${textColor} text-center font-semibold text-base`}>{children}</Text>
      )}
    </Pressable>
  );
}
