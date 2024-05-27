import { StyleSheet, Text, TouchableOpacity,View,Image } from 'react-native';
import React from 'react';
import { COLORS, Font } from '../../Theme/Colors';


const CustomButton = ({ title, onPress, bgColor, textColor ,borderColor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: bgColor ,borderColor:borderColor}]}
      onPress={onPress}
    >
      <Text style={[styles.textStyle, { color: textColor || COLORS.white }]}>{title}</Text>
      <View style={{height:40,width:40,backgroundColor:COLORS.white,borderRadius:30,alignItems:'center',justifyContent:'center'}}>
         <Image source={require('../../../Assets/Images/rightIcon.png')}
         style={{height:23,width:23}}/>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Font.semibold,
    left:50
  },
});
