import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, FlatList, StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import CustomButton from '../../Component/CommunButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataContext } from '../../../../DataContext';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Deshbord = () => {
  const { data, selectedId, setSelectedId, getBgColor } = useContext(DataContext);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.containerBox,
          { marginRight: 16, marginBottom: 10, backgroundColor: item.id === selectedId ? getBgColor() : COLORS.white, borderColor: item.id === selectedId ? COLORS.white : COLORS.black }
        ]}
        onPress={() => setSelectedId(item.id)}
      >
        <Image
          source={item.Icon}
          style={[
            { height: Width * 0.20, width: Width * 0.20,},
            item.id === selectedId && { tintColor: COLORS.white }
          ]}
        />
        <Text style={[styles.text, item.id === selectedId && { color: COLORS.white }]}>{item.text}</Text>
        <Text style={[styles.text1, item.id === selectedId && { color: COLORS.white }]}>{item.DateTime}</Text>
        <Text style={[styles.text1, item.id === selectedId && { color: COLORS.white }]}>{item.Location}</Text>
      </TouchableOpacity>
    );
  }

  const handleNext = async() => {
    if (selectedId !== null) {
      const selectedItem = data.find(item => item.id === selectedId);
      if (selectedItem && selectedItem.screens) {
        navigation.navigate(selectedItem.screens.Navigation, { selectedId, bgColor: getBgColor() });
        // console.log(selectedId)
      }
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.white}/>
      <CustomHeader
        title={'Industries'}
        left={true}
        back={true}
        OnPress={()=>navigation.goBack()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      <CustomButton
        title={'Next'}
        bgColor={selectedId !== null ? getBgColor() : COLORS.white}
        borderColor={selectedId !== null ? getBgColor() : COLORS.black}
        textColor={selectedId !== null ? COLORS.white : COLORS.black}
        onPress={handleNext}
      />
    </SafeAreaView>
  );
}

export default Deshbord

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  innerContainer: {
    flex: 1,
  },
  text1: {
    fontSize: 12,
    color: 'black',
    fontFamily: Font.regular,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: Font.regular,
    fontWeight: 'bold'
  },
  containerBox: {
    // flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    // borderWidth: 0.1,
    padding: 22,
    borderRadius: 12,
    paddingHorizontal: 4.5,
    gap: 10,
    height:200,
    shadowColor: COLORS.blue,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  }
})
