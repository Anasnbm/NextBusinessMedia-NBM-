import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../Theme/Colors';

const CustomTextinput = ({ PlaceHolder, icons, secure, phone, value, onChangeText, onBlur, error, touched }) => {
  const [showEye, setShowEye] = React.useState(false);

  const handleEye = () => {
    setShowEye(!showEye);
  };

  return (
    <View>
      <TextInput
        mode='outlined'
        activeOutlineColor={error && touched ? COLORS.red : COLORS.black}
        outlineColor={COLORS.black}
        placeholder={PlaceHolder}
        keyboardType={phone ?"phone-pad" : 'default'}
        value={value}
        onBlur={onBlur}
        error={error && touched ? true : false}
        textColor={error && touched ? COLORS.red : COLORS.black}
        onChangeText={onChangeText}
        secureTextEntry={secure && !showEye}
        right={icons ? (
          <TextInput.Icon icon={icons} size={20} />
        ) : (
          <TextInput.Icon
            icon={showEye ? 'eye' : 'eye-off'}
            onPress={handleEye}
          />
        )}
        style={{ marginTop: 10, backgroundColor: COLORS.white }}
      />
    </View>
  );
};

export default CustomTextinput;

const styles = StyleSheet.create({});
