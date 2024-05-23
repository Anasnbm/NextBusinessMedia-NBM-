import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, CommonStyles, Font } from '../../Theme/Colors'
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextinput from '../../Component/CommonTextInput/CustomTextinput';
import EventPayment from '../Events/EventPayment';
import EventList from '../Events/EventList';

const UserProfile = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setPickedImage(image);
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white,padding:15 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.Picker} onPress={imagePicker}>
          {pickedImage ? (
            <Image source={{ uri: pickedImage.path }} style={styles.pickedImage} />
          ) : (
            <Image source={require('../../../Assets/Images/userimage.jpg')} 
      style={styles.pickedImage}/>
      )}
        </TouchableOpacity>
        <Text style={styles.Heading}>Rahil Khan</Text>
        <Text style={styles.texT}>Founder Technoxian</Text>
      </View>
        <View style={{height:100,width:'100%',borderWidth:1,marginTop:20,borderRadius:10}}></View>
        <Text style={[styles.Heading,{marginTop:10}]}>Activities</Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  Picker: {
    // marginTop:10,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickedImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  pickerText: {
    color: COLORS.gray,
    fontSize: 16,
  },
  Heading:{
    fontSize:16,
    color:COLORS.black,
    fontWeight:'800',
    fontFamily:Font.bold,
  },
  texT:{
    fontSize:14,
    fontWeight:'500',
    color:COLORS.black,
    fontFamily:Font.regular
  }
});
