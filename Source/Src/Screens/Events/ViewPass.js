import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { COLORS, Font } from '../../Theme/Colors';

const data = {
  name: 'Jamshed',
  age: '20',
  company: 'Agrenext',
};

const ViewPass = () => {
  const navigation = useNavigation();
  const [qrCodeSize, setQrCodeSize] = useState(150);

  const toggleQrCodeSize = () => {
    const newSize = qrCodeSize === 150 ? 250 : 150;
    setQrCodeSize(newSize);
  };

  const qrCodeValue = JSON.stringify(data); // Convert the data object to a JSON string

  return (
    <View style={styles.container}>
      <CustomHeader
        back={true}
        left={true}
        title={'QR Code'}
        OnPress={() => navigation.goBack()}
      />
      <TouchableOpacity onPress={toggleQrCodeSize}>
        <QRCode value={qrCodeValue} size={qrCodeSize} />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Name: {data.name}</Text>
        <Text style={styles.detailsText}>Age: {data.age}</Text>
        <Text style={styles.detailsText}>Company: {data.company}</Text>
      </View>
    </View>
  );
};

export default ViewPass;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: Font.regular,
    marginVertical: 5,
  },
});
