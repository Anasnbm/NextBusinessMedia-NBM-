
import React, { useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../Component/CommunButton/CustomButton';
import { COLORS } from '../../Theme/Colors';
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
      <StatusBar backgroundColor={COLORS.blue} />
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}
          >
            <Path
              fill={COLORS.blue}
              d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            />
          </Svg>
          <View style={{ padding: 15, bottom: 200 }}>
            <CustomHeader left={true} back={true} OnPress={() => navigation.goBack()} textcolor={true} />

            <Text style={styles.title}>Verification</Text>
            <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>Please Enter 4 Digit Code that Send your Email Address</Text>
            <SafeAreaView style={styles.root}>
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
            </SafeAreaView>
          </View>
          <View style={{ paddingHorizontal: 20 }}>

            <CustomButton title={'Submit'} bgColor={COLORS.blue} onPress={() => navigation.navigate('ResetPassword')} />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.bottomWavy}
          >
            <Path
              fill={COLORS.blue}
              d='M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,149.3C560,128,640,128,720,154.7C800,181,880,235,960,218.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            />
          </Svg>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {},
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  box: {
    backgroundColor: COLORS.blue,
    height: 80,
  },
  bottomWavy: {
    position: 'absolute',
    bottom: 20,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 20, marginTop: 80, fontWeight: 'bold' },
  codeFieldRoot: { marginTop: 20 },
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
})