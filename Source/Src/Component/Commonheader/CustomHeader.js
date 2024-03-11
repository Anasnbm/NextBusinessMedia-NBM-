import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, Font } from '../../Theme/Colors';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CustomHeader = ({ title, left, right,back,OnPress,textcolor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      {left && (
          <TouchableOpacity style={[styles.iconContainer,]}  onPress={OnPress}>
            <Image source={back ? require('../../../Assets/Images/left-arrow.png') : require('../../../Assets/Images/menu.png')} style={styles.icon} tintColor={textcolor ? COLORS.white:COLORS.black} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.centerContainer}>
        {title &&
       <Text style={[styles.text, { color: textcolor ? COLORS.white : COLORS.black }]}>{title}</Text>
        }
      </View>

      <View style={styles.rightContainer}>
        {right &&
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../../../Assets/Images/notification.png')} style={styles.icon} />
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 20, 
   marginBottom:10
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? Font.regular : Font.medium,
    fontSize: 16,
    color: COLORS.black,
    fontWeight:'bold'
  },
  iconContainer: {
    width: Width * 0.06,
    height: Height * 0.038,
    justifyContent: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  leftContainer: {
    flex: 1, 
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  rightContainer: {
    flex: 1, 
    alignItems: 'flex-end', 
  },
});
