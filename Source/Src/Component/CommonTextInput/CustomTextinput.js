// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { COLORS } from '../../Theme/Colors';

// const CustomTextinput = ({ PlaceHolder, icons, secure, phone, value, onChangeText, onBlur, error, touched }) => {
//   const [showEye, setShowEye] = React.useState(false);

//   const handleEye = () => {
//     setShowEye(!showEye);
//   };

//   return (
//     <View>
//       <TextInput
//         mode='outlined'
//         activeOutlineColor={error && touched ? COLORS.red : COLORS.black}
//         outlineColor={COLORS.black}
//         placeholder={PlaceHolder}
//         keyboardType={phone ?"phone-pad" : 'default'}
//         value={value}
//         onBlur={onBlur}
//         error={error && touched ? true : false}
//         textColor={error && touched ? COLORS.red : COLORS.black}
//         onChangeText={onChangeText}
//         secureTextEntry={secure && !showEye}
//         right={icons ? (
//           <TextInput.Icon icon={icons} size={20} />
//         ) : (
//           <TextInput.Icon
//             icon={showEye ? 'eye' : 'eye-off'}
//             onPress={handleEye}
//           />
//         )}
//         style={{ marginTop: 10, backgroundColor: COLORS.white,height:50 }}
//       />
//     </View>
//   );
// };

// export default CustomTextinput;

// const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native'; // Import Image from react-native
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from react-native-vector-icons
import { COLORS } from '../../Theme/Colors';
import { ColorProperties } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const CustomTextinput = ({ PlaceHolder, icons, secure, phone, value, onChangeText, onBlur, error, touched,LockIcon }) => {
  const [showEye, setShowEye] = React.useState(false);

  const handleEye = () => {
    setShowEye(!showEye);
  };

  return (
    <View style={{marginTop: 10,
      backgroundColor: COLORS.white,
      height: 50,
      borderColor: error && touched ? COLORS.red : COLORS.placeHolderTextColor,
      borderWidth: 0.6,
      paddingLeft: 10, 
      borderRadius:8,
      marginTop:20}}>
        
      <TextInput
        placeholder={PlaceHolder}
        keyboardType={phone ? "phone-pad" : 'default'}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secure && !showEye}
        placeholderTextColor={COLORS.placeHolderTextColor}
        style={{
          left:30
        }}
      />
      
        <Image source={icons} style={styles.iconStyle} tintColor={COLORS.secondry} /> 
      {LockIcon ? (
        <Icon
          name={showEye ? 'eye' : 'eye-slash'} 
          size={20}
          style={[styles.iconStyle1,tintColor=COLORS.secondry]}
          color={COLORS.faint}
          onPress={handleEye}
        />
      ):null}
    </View>
  );
};

export default CustomTextinput;

const styles = StyleSheet.create({
  iconStyle: {
     position: 'absolute',
    // right: 10,
     top: 13,
    width: 20, 
     height: 20,
     left:10,
   
  },
  iconStyle1:{
    position: 'absolute',
     right: 10,
     top: 13,
    width: 20, 
     height: 20,
     //left:10,
  }
});
