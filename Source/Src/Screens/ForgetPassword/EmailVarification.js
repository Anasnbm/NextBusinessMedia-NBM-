import React, { useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, Text, SafeAreaView ,Image} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import CustomHeader from '../../Component/Commonheader/CustomHeader'; // Make sure this path is correct
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../Component/CommunButton/CustomButton'; // Make sure this path is correct
import { COLORS, Font } from '../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';

const CELL_COUNT = 4;

export default function EmailVarification() {
  const navigation = useNavigation()
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <CustomHeader left={true} back={true} 
      OnPress={() => navigation.goBack()}
      title={'Varification'}/>
      <Image source={require('../../../Assets/Images/Lock1.png')}
                        style={{ alignSelf: 'center', marginTop: 30,height:100,width:100,tintColor:COLORS.blue }} />
      {/* Main Content */}
      <View style={styles.content}>
        {/* <Text style={styles.title}>Verification</Text> */}
        <Text style={styles.subtitle}>Please Enter 4 Digit Code that Was Sent to Your Email Address</Text>
      
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={{marginTop:30}}>

          <CustomButton title={'Submit'} bgColor={COLORS.blue} onPress={() => navigation.navigate('ResetPassword')} />
          </View>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding:20
  },
  content: {

  
    paddingTop: 20, // Add padding for better spacing
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, // Add margin for better spacing
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20, 
    color:COLORS.black,
    marginTop:50,
    fontFamily:Font.regular
  },
  root: {
    flex: 1,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
