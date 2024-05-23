import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { COLORS, Font } from '../../Theme/Colors'
import CustomButton from '../../Component/CommunButton/CustomButton'

const EventPayment = () => {
    const navigation = useNavigation()
    const route = useRoute()

    console.log(route.params.data)
    return (
        <View style={styles.container}>
            {/* <StatusBar translucent={true} barStyle={'light-content'}/> */}
            <Image source={route.params.data.Icon} style={styles.BigIcon} />
            <View style={{ position: 'absolute', top: 0, padding: 15 }}>
                <CustomHeader back={true} left={true} textcolor={COLORS.white}
                    OnPress={() => navigation.goBack()} />
            </View>
            <View style={{ padding: 15, }}>

                <Text style={styles.heAhding}>{route.params.data.Heading}</Text>
                <View style={styles.mapItem}>
                    <Image source={require('../../../Assets/Images/calendar.png')}
                        style={styles.Calnderimg} />
                    <View>
                        <Text style={{ color: COLORS.black }}>Date</Text>
                        <Text style={styles.TextItem}>{route.params.data.dateEvent}</Text>
                        <Text>{route.params.data.Location}</Text>
                    </View>
                </View>
                <View style={styles.HoriZontalLine}></View>
                <View style={styles.mapItem}>
                    <Image source={require('../../../Assets/Images/dollar.png')}
                        style={styles.Calnderimg} />
                    <View>
                        <Text style={{ color: COLORS.black }}>Ticket Price</Text>
                        <Text style={[styles.TextItem, { fontSize: 18, color: COLORS.blue }]}>{route.params.data.Money}</Text>
                        <Text style={[styles.TextItem, {}]}>Get Pass Charge Apply</Text>
                    </View>
                </View>
                <View style={styles.HoriZontalLine}></View>
                <Text style={styles.heAhding}>{'997+'} people are attanding</Text>
                <Image source={require('../../../Assets/Images/SeeAll.png')}
                    style={{ height: 40, width: 170, marginTop: 10 }} />

            </View>
            <View style={{ position: 'absolute', bottom: 30, width: '90%', alignSelf: 'center' }}>
                <CustomButton
                    title={'Book Your Ticket Now'}
                    bgColor={COLORS.blue}
                    textColor={COLORS.white}
                    borderColor={COLORS.blue}
                    onPress={() => navigation.navigate('CoformationPayment')} />
            </View>
        </View>
    )
}

export default EventPayment

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    BigIcon: {
        height: 200,
        width: '100%',
        resizeMode: 'stretch'
    },
    heAhding: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.black
    },
    Calnderimg: {
        height: 30,
        width: 30
    },
    HoriZontalLine: {
        height: 1,
        marginTop: 10,
        width: '100%',
        backgroundColor: '#9e9e9e'
    }, mapItem: {
        flexDirection: 'row', gap: 20, marginTop: 10
    }, TextItem: {
        fontSize: 16,
        color: COLORS.black,
        fontWeight: '500',
        fontFamily: Font.bold
    }
})