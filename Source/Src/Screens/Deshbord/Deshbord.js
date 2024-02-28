import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import CustomButton from '../../Component/CommunButton/CustomButton';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const data = [
  {
    id: 1,
    Icon: require('../../../Assets/Images/home.png'),
    text: 'Agriculture Tech',
    screen: 'MainDeshbord'
  },
  {
    id: 2,
    Icon: require('../../../Assets/Images/student-bag.png'),
    text: 'Fintech',
    screen: ''
  },
  {
    id: 3,
    Icon: require('../../../Assets/Images/insurance.png'),
    text: 'Prop Tech',
    screen: ''
  },
  {
    id: 4,
    Icon: require('../../../Assets/Images/it.png'),
    text: 'IT',
    screen: ''
  }
]
const Deshbord = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const handlePress = (id, screen) => {
    setSelectedId(id);
  
    if (screen) {
      navigation.navigate(screen)
    }
  };
 

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.containerBox,
          { marginRight: 16, marginBottom: 10 },
          selectedId === item.id && { backgroundColor: COLORS.blue ,borderColor:COLORS.white}
        ]}
        onPress={() => setSelectedId(item.id)}
      >
        <Image
          source={item.Icon}
          style={[
            { height: Width * 0.075, width: Width * 0.075 },
            selectedId === item.id && { tintColor: COLORS.white }
          ]}
        />
        <Text style={[styles.text, selectedId === item.id && { color: COLORS.white }]}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      <CustomHeader title={'Industries'}
        left={true}
        back={true}
        OnPress={() => navigation.goBack()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}

        numColumns={2} />

      <CustomButton title={'Next'} 
      bgColor={selectedId ? 'blue':'white'} 
      borderColor={selectedId ? 'blue':'black'}
      textColor={selectedId ? 'white':'black'}
      onPress={() => handlePress(selectedId, data.find(item => item.id === selectedId)?.screen)}/>


    </SafeAreaView>

  )
}

export default Deshbord

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15

  },
  innerContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  ImageContainer: {
    // flex:1,
    backgroundColor: "red",
    borderRadius: 20
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: Font.regular,
    fontWeight: 'bold'
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 22,
    width:'47%',
    borderWidth: 1,
    padding:22,

    borderRadius: 12,
    paddingHorizontal: 4.5,
    gap: 10


  }
})