import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLORS } from '../../Theme/Colors'
import QRCode from 'react-native-qrcode-svg';
import CustomButton from '../../Component/CommunButton/CustomButton';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../../../DataContext';
import { height, width } from 'react-native-dimension';
const SuccessFulPayment = () => {
    const navigation = useNavigation()
    const {selectedId,getBgColor} = useContext(DataContext);
    const bgColor=getBgColor()
    return (
        <>

            <SafeAreaView style={styles.container}
                showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: 'flex-start', paddingHorizontal: 20 }}>
                    <CustomHeader back={true} left={true} title={'Ticket'}
                        OnPress={() => navigation.goBack()} />
                </View>
                {/* <Image source={require('../../../Assets/Images/Success.png')}
                style={styles.Successimg} /> */}
                <View style={{
                    height: '50%', backgroundColor: '#EEEEEE', width: '90%', borderRadius: 5, shadowColor: COLORS.faint,
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,

                    elevation: 15,
                }}>
                    <View style={{ height: '46%', backgroundColor: '#EEEEEE', padding: 20, borderRadius: 5 }}>
                        <Image source={require('../../../Assets/Images/Speaker.jpg')}
                            style={{ height: 120, width: "100%", borderRadius: 10 }} />
                        <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: '800' }}>FiNext Awards & Conference | Morocco | 2024</Text>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                        <View
                            style={{
                                height: height(6),
                                width: width(13),
                                borderRadius: width(13),
                                backgroundColor: 'white',
                            }}
                        />
                        <Text style={{ color: 'grey' }}>
                            -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                            - - - - - - - - - - 
                        </Text>
                        <View
                            style={{
                                height: height(6),
                                width: width(13),
                                borderRadius: width(10),
                                backgroundColor: 'white',
                            }}
                        />
                    </View>
                    <View style={{ padding: 20, gap: 10 }}>
                        <View>
                            <Text style={{ color: COLORS.faint, fontSize: 14 }}>Name</Text>
                            <Text style={{ color: COLORS.black, fontSize: 14 }}>Jamshed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: COLORS.faint, fontSize: 14 }}>Date</Text>
                                <Text style={{ color: COLORS.black, fontSize: 14 }}>20 February, 2024</Text>
                            </View>
                            <View>
                                <Text style={{ color: COLORS.faint, fontSize: 14 }}>Time</Text>
                                <Text style={{ color: COLORS.black, fontSize: 14 }}>10:00 AM</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.faint, fontSize: 14 }}>Location</Text>
                            <Text style={{ color: COLORS.black, fontSize: 14 }}>Marrakesh, Morocco</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%' }}>
                    <CustomButton
                        title={'Qr Code'}
                        bgColor={bgColor}
                        textColor={COLORS.white}
                        borderColor={bgColor}
                        onPress={() => navigation.navigate('ViewPass')} />
                </View>
            </SafeAreaView></>
    )
}

export default SuccessFulPayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,

    },



})