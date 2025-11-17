import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  label: string;
  helperText?: string;
  errorMessage?: string;
  containerClassName?: string;
  inputClassName?: string;
};

const baseInputClass =
  "w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-base text-gray-900";

export default function InputField({
  label,
  helperText,
  errorMessage,
  containerClassName = "",
  inputClassName = "",
  ...props
}: Props) {
  return (
    <View className={`w-full ${containerClassName}`}>
      <Text className="text-sm font-semibold text-gray-600 mb-1">{label}</Text>
      <TextInput
        placeholderTextColor="#9CA3AF"
        className={`${baseInputClass} ${errorMessage ? "border-red-400" : ""} ${inputClassName}`}
        {...props}
      />
      {helperText && !errorMessage ? (
        <Text className="mt-1 text-xs text-gray-500">{helperText}</Text>
      ) : null}
      {errorMessage ? <Text className="mt-1 text-xs text-red-500">{errorMessage}</Text> : null}
    </View>
  );
}
