import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

const IngredientCreateCard = ({ quantity, name, onDelete }) => {
  return (
    <View className="flex flex-row items-start justify-between mb-[15px]">
      <View className="flex flex-row items-start">
        <Text className="w-[60px] font-jostSemiBold text-[18px] text-primaryColor">
          {quantity}
        </Text>
        <Text className="font-jostSemiBold text-[18px] text-primaryColor">
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text className="font-jostSemiBold text-[20px] text-primaryColor">
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IngredientCreateCard;
