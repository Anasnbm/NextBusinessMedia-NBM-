import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, Font } from '../../Theme/Colors';

const CustomButton = ({ title, onPress, bgColor, textColor ,borderColor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: bgColor ,borderColor:borderColor}]}
      onPress={onPress}
    >
      <Text style={[styles.textStyle, { color: textColor || COLORS.white }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    borderWidth:1
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Font.semibold,
  },
});
