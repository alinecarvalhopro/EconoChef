import React from 'react';

import { View, Text } from 'react-native';

const IngredientRecipeCard = ({ quantity, name }) => {
  return (
    <View className="flex-row items-start justify-between mb-[15px]">
      <View className="flex-row items-start">
        <Text className="w-[60px] font-jostSemiBold text-[18px] text-primaryColor">
          {quantity}
        </Text>
        <Text className="font-jostSemiBold text-[18px] text-primaryColor">
          {name}
        </Text>
      </View>
    </View>
  );
};

export default IngredientRecipeCard;
