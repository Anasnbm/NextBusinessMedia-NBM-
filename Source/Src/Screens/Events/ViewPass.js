import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { COLORS } from '../../Theme/Colors';
const ViewPass = () => {
    const navigation=useNavigation()
    const [qrCodeSize, setQrCodeSize] = useState(150);

    const toggleQrCodeSize = () => {
        const newSize = qrCodeSize === 150 ? 250 : 150;
        setQrCodeSize(newSize);
    };
  return (
      <View style={{ alignItems: 'center',padding:15 ,flex:1,backgroundColor:COLORS.white}}
    >
        <CustomHeader
        back={true}
        left={true}
        title={'Qr Code'}
        OnPress={()=>navigation.goBack()}/>
    <TouchableOpacity onPress={toggleQrCodeSize} >
        <QRCode value={'hello ji'} size={qrCodeSize} />
        {/* You can customize the QR code appearance or add participant details here */}
        {/* <Text>{participant.name}, {participant.age}</Text> */}
</TouchableOpacity>
    </View>

  )
}

export default ViewPass

const styles = StyleSheet.create({})