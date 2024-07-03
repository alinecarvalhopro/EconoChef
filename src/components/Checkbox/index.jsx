import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import SVGCheckboxSelected from '../../images/svg/Icons/SVGCheckboxSelected';
import SVGCheckboxUnselected from '../../images/svg/Icons/SVGCheckboxUnselected';

const Checkbox = ({ text, isChecked, handleCheckboxToggle }) => {
  return (
    <TouchableOpacity onPress={handleCheckboxToggle}>
      <View className="flex-row items-center gap-[8px] mb-[15px]">
        {isChecked ? <SVGCheckboxSelected /> : <SVGCheckboxUnselected />}
        <Text className="text-primaryColor text-[18px] font-jostSemiBold">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox
