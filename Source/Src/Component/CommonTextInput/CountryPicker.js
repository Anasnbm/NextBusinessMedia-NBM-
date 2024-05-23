import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image,TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CountryPicker from 'react-native-country-picker-modal';
import { COLORS } from '../../Theme/Colors';

const CountryPickerComponent = ({ PlaceHolder, icons, secure, phone, value, onChangeText, onBlur, error, touched, LockIcon }) => {
  const [countryCode, setCountryCode] = useState('91');
  const [country, setCountry] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  useEffect(() => {
    setCountry({ cca2: 'IN', name: 'India', callingCode: ['91'] });
  }, []);

  const handleCountryChange = selectedCountry => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.callingCode[0]);
    setIsPickerVisible(false);
  };

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { borderColor: error && touched ? COLORS.red : COLORS.placeHolderTextColor }]}>
        <Image source={require('../../../Assets/Icons/telephone.png')} style={{height:20,width:20,marginRight:5}}
        tintColor={COLORS.secondry}/>
        {/* <View style={styles.verticalLine} /> */}
        <TouchableOpacity onPress={togglePicker}>
          <Text style={styles.countryCodeText}>{`+${countryCode}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePicker}>
          <Entypo name="chevron-small-down" size={20} color="black" style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>
        <View style={[styles.placeHolder,{ borderColor: error && touched ? COLORS.red : COLORS.placeHolderTextColor }]}>
               <TextInput
              style={styles.input}
              placeholder={PlaceHolder}
              keyboardType={"phone-pad"}
              value={value}
              onBlur={onBlur}
              onChangeText={onChangeText}
              placeholderTextColor={COLORS.placeHolderTextColor}
            />
        </View>
      {isPickerVisible && (
        <CountryPicker
          onSelect={handleCountryChange}
          countryCode={country ? country.cca2 : undefined}
          visible={isPickerVisible}
          withFilter={true}
          withFlag={false}
          withCallingCode={true}
          withCountryNameButton={true}
          onClose={() => setIsPickerVisible(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap:15,
    marginTop:20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: COLORS.placeHolderTextColor,
    width: '30%',
    height: 50,
    padding:10
  },
  countryCodeText: {
    fontSize: 14,
    color: COLORS.black,
    
  },
  verticalLine: {
    height: 24,
    borderRightWidth: 1,
    borderColor: COLORS.placeHolderTextColor,
    marginRight: 10,
  },
  placeHolder:{
    height: 50,
    width:"65%",
    borderRadius:10,
    borderWidth:0.8,
    borderColor: COLORS.placeHolderTextColor,
    paddingHorizontal:10
  }
});

export default CountryPickerComponent;
