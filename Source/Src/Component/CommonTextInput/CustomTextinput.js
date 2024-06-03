import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Theme/Colors';

const CustomTextinput = ({ PlaceHolder, icons, secure, phone, value, onChangeText, onBlur, error, touched, LockIcon }) => {
  const [showEye, setShowEye] = React.useState(false);

  const handleEye = () => {
    setShowEye(!showEye);
  };

  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: COLORS.white,
        height: 50,
        borderColor: error && touched ? COLORS.red : COLORS.placeHolderTextColor,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
        marginTop: 20,
      }}
    >
      <TextInput
        placeholder={PlaceHolder}
        keyboardType={phone ? 'phone-pad' : 'default'}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secure && !showEye}
        placeholderTextColor={COLORS.placeHolderTextColor}
        style={{
          left: 30,
        }}
      />

      <Image source={icons} style={styles.iconStyle} tintColor={COLORS.secondry} />
      {LockIcon ? (
        <Icon
          name={showEye ? 'eye' : 'eye-slash'}
          size={20}
          style={[styles.iconStyle1,]}
          color={COLORS.faint}
          onPress={handleEye}
        />
      ) : null}
    </View>
  );
};

export default CustomTextinput;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: 13,
    width: 20,
    height: 20,
    left: 10,
  },
  iconStyle1: {
    position: 'absolute',
    right: 10,
    top: 13,
    width: 20,
    height: 20,
  },
});
