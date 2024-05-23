import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, CommonStyles, Font } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        id: 1,
        Image: require('../../../Assets/Images/rightGood.png'),
        Time: '2.00PM TO 2.30PM',
        day: '1st Day \n November 13, 2024',
        Image1: require('../../../Assets/Images/Saveicon.png'),
        location: 'Crowne Plaza Dubai - Festival City,',
        text: 'CONFERENCE OPENING BY MR. ANAS JAWED, CONFERENCE CHAIR',
        saveIcon: require('../../../Assets/Images/bookmark.png')
    },
    {
        id: 2,
        Image: require('../../../Assets/Images/rightGood.png'),
        Time: '2.00PM TO 2.30PM',
        day: '1st Day \n November 13, 2024',
        Image1: require('../../../Assets/Images/Saveicon.png'),
        location: 'Crowne Plaza Dubai - Festival City,',
        text: 'KEYNOTE ADDRESS: "INNOVATION IN AGRICULTURAL TECHNOLOGY"',
        saveIcon: require('../../../Assets/Images/bookmark.png')
    },
    {
        id: 3,
        Image: require('../../../Assets/Images/rightGood.png'),
        Time: '2.00PM TO 2.30PM',
        day: '1st Day \n November 13, 2024',
        Image1: require('../../../Assets/Images/Saveicon.png'),
        location: 'Crowne Plaza Dubai - Festival City,',
        text: 'CONFERENCE OPENING BY MR. ANAS JAWED, CONFERENCE CHAIR',
        saveIcon: require('../../../Assets/Images/bookmark.png')
    },
    {
        id: 4,
        Image: require('../../../Assets/Images/rightGood.png'),
        Time: '2.00PM TO 2.30PM',
        day: '1st Day \n November 13, 2024',
        Image1: require('../../../Assets/Images/Saveicon.png'),
        location: 'Crowne Plaza Dubai - Festival City,',
        text: 'KEYNOTE ADDRESS: "INNOVATION IN AGRICULTURAL TECHNOLOGY"',
        saveIcon: require('../../../Assets/Images/bookmark.png')
    }
]
const Item = ({ item }) => {
    const [isSaved, setIsSaved] = useState(true);

    const saveItem = () => {
        setIsSaved(!isSaved);
    };

    return (
        <>
            <View style={{ borderWidth: 1, borderColor: COLORS.black, padding: 5, borderRadius: 15, marginTop: 10 }}>
                <View style={styles.cardContainer}>
                    <View style={{ backgroundColor: '#eeeee4', padding: 8, borderRadius: 10 }}>
                        <Image source={item.Image} style={{ height: 30, width: 30 }} />
                    </View>
                    <View>
                        <Text style={[CommonStyles.text, { color: COLORS.green, fontWeight: 'bold', fontSize: 16 }]}>{item.Time}</Text>
                        <Text style={[CommonStyles.text, { marginTop: 5, fontWeight: 'bold' }]}>{item.location}</Text>
                    </View>
                    <TouchableOpacity onPress={saveItem}>
                        <Image source={isSaved ? item.Image1 : item.saveIcon} style={{ height: isSaved ? 25 : 30, width: isSaved ? 25 : 25}} />
                    </TouchableOpacity>
                </View>
                <Text style={[CommonStyles.text, { marginTop: 10, fontWeight: '600' }]}>{item.text}</Text>
            </View>
        </>
    );
};

const Agenda = () => {
    const navigation=useNavigation();
    const renderItem = ({ item }) => {

        return (
            <>

                <View style={{ borderWidth: 1, borderColor: COLORS.black, padding: 5, borderRadius: 15, marginTop: 10 }}>

                    <View style={styles.cardContainer}>
                        <View style={{ backgroundColor: '#eeeee4', padding: 8, borderRadius: 10 }}>
                            <Image source={item.Image} style={{ height: 30, width: 30 }} />
                        </View>
                        <View>
                            <Text style={[CommonStyles.text, { color: COLORS.green, fontWeight: 'bold', fontSize: 16 }]}>{item.Time}</Text>
                            <Text style={[CommonStyles.text, { marginTop: 5, fontWeight: 'bold' }]}>{item.location}</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={item.Image1} style={{ height: 40, width: 40 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[CommonStyles.text, { marginTop: 10, fontWeight: '600' }]}>{item.text}</Text>
                </View>
            </>
        )
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <CustomHeader back={true} left={true} title={'Agenda'} OnPress={()=>navigation.goBack()}/>
            <Text style={styles.heading}>Schedule</Text>
            <Text style={[styles.heading, { fontSize: 16 }]}>Agriculture and Technology Awards and Conference</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: '65%', marginTop: 20, fontSize: 16, color: COLORS.black,fontFamily:Font.regular }}>Join us for a conversation on the impact of climate change on the agreeculture Industry</Text>
                <Image source={require('../../../Assets/Images/agree.jpg')} style={{ height: 150, width: 150, }} />
            </View>
            <Text style={styles.heading}>1st Day {'\n'} November 13, 2024</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 30 }} />
            <Text style={styles.heading}>2nd Day {'\n'} November 13, 2024</Text>
            <FlatList
                data={data}
                //   renderItem={renderItem}
                renderItem={({ item }) => <Item item={item} />}
                contentContainerStyle={{ paddingBottom: 30 }} />
                <Text style={styles.heading}>3rd Day {'\n'} November 13, 2024</Text>
            <FlatList
                data={data}
                //   renderItem={renderItem}
                renderItem={({ item }) => <Item item={item} />}
                contentContainerStyle={{ paddingBottom: 30 }} />
        </ScrollView>
    )
}

export default Agenda

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15,

    },
    heading: {
        fontSize: 25,
        color: COLORS.black,
        fontWeight: 'bold',
        fontFamily:Font.bold
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
})