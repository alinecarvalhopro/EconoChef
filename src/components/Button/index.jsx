import React from 'react';

import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const Button = ({
  title,
  type,
  loading,
  disabled,
  textStyles,
  buttonStyles,
  onPress,
  backgroundColor,
  disabledBackgroundColor,
  borderColor,
  textColor,
  ...props
}) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = () => (
    <>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" size={22} />
      ) : (
        <Text className={`${textStyles}`}>{title}</Text>
      )}
    </>
  );

  return (
    <TouchableOpacity
      className={`bg-${
        loading ? disabledBackgroundColor : backgroundColor
      } ${buttonStyles}`}
      type={type}
      onPress={handleOnPress}
      disabled={loading || disabled}
      {...props}
    >
      {renderText()}
    </TouchableOpacity>
  );
};

export default Button;
