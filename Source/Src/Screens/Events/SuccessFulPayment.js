import { StyleSheet, Text, View, Image, TouchableOpacity ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Theme/Colors'
import QRCode from 'react-native-qrcode-svg';
import CustomButton from '../../Component/CommunButton/CustomButton';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const SuccessFulPayment = () => {
    const navigation=useNavigation()
    const [qrCodeSize, setQrCodeSize] = useState(150);

    const toggleQrCodeSize = () => {
        const newSize = qrCodeSize === 150 ? 250 : 150;
        setQrCodeSize(newSize);
    };
    return (
      <>

        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}>
            <CustomHeader back={true} left={true} title={'Ticket'}
            OnPress={()=>navigation.goBack()}/>
            <Image source={require('../../../Assets/Images/Success.png')}
                style={styles.Successimg} />
            <View style={styles.Box}>
                <View style={styles.boxItem}>
                    <Text style={styles.text}>Full Name</Text>
                    <Text style={styles.text}>Abceegfgtha</Text>
                </View>
                <View style={styles.Line}>

                </View>


                <View style={styles.boxItem}>
                    <Text style={styles.text}>Event</Text>
                    <Text style={styles.text}>AgriNext Awards, Conference & Expo</Text>
                </View>
                <View style={styles.Line}>

                </View>



                <View style={styles.boxItem}>
                    <Text style={styles.text}>Location</Text>
                    <Text style={styles.text}>Noda sec 15 Noida UP</Text>
                </View>
                <View style={styles.Line}>

                </View>




                <View style={styles.boxItem}>
                    <Text style={styles.text}>Date & Time</Text>
                    <Text style={styles.text}>12-Nov-2024</Text>
                </View>
                <View style={styles.Line}>

                </View>

                <View style={styles.boxItem}>
                    <Text style={styles.text}>Ticket Type</Text>
                    <Text style={styles.text}>VIP</Text>
                </View>
                <View style={styles.Line}>

                </View>
                <Text style={[styles.text, { alignSelf: 'center', fontSize: 20, marginTop: 20 }]}>QR CODE</Text>
                <TouchableOpacity onPress={toggleQrCodeSize}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <QRCode value={'hello ji'} size={qrCodeSize} />
                        {/* You can customize the QR code appearance or add participant details here */}
                        {/* <Text>{participant.name}, {participant.age}</Text> */}
                    </View>
                </TouchableOpacity>

            </View>
           <View style={{marginBottom:40}}>
           <CustomButton
        title={'Go To Home'}
        bgColor={COLORS.blue}
        textColor={COLORS.white}
        borderColor={COLORS.blue}
        onPress={() => navigation.navigate('Deshbord')} />
           </View>
        </ScrollView></>
    )
}

export default SuccessFulPayment

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 15,
        backgroundColor: COLORS.white,

    },
    Successimg: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginBottom: 20
    },
    Box: {
        // borderWidth: 1,
        padding: 15,
        // alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.36,
        shadowRadius: 1.68,

        elevation: 4,
        borderRadius: 8
    },
    boxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    Line: {
        height: 0.8,
        width: '100%',
        backgroundColor: COLORS.faint,
        marginTop: 10
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.black

    }
})