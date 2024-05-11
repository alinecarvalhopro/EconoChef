import { Text, TextInput, View } from 'react-native';

export const Input = ({
  label,
  value,
  placeholder,
  errorMessage,
  onChangeText,
  isError = false,
  ...rest
}) => {
  return (
    <View className="flex gap-[10px] mb-[20px]">
      <Text className="text-primaryColor font-jostRegular text-[20px]">{label}</Text>
      <TextInput
        className="border border-primaryColor h-[50px] rounded-[4px] px-[12px]"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        isError={!!errorMessage}
        {...rest}
      />
    </View>
  );
};

export default Input;
