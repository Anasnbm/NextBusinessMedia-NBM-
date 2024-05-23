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
  const { data } = useContext(DataContext);
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.containerBox,
          { marginRight: 16, marginBottom: 10 },
          selectedId === item.id && { backgroundColor: COLORS.blue, borderColor: COLORS.white }
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
    );
  }

  const handleNext = async() => {
    if (selectedId !== null) {
      const selectedItem = data.find(item => item.id === selectedId);
      if (selectedItem && selectedItem.screen) {
        await AsyncStorage.setItem('selectedId', JSON.stringify(selectedId));
        navigation.navigate(selectedItem.screen, { selectedId, bgColor: selectedItem.bgColor });
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
        bgColor={selectedId !== null ? COLORS.blue : COLORS.white}
        borderColor={selectedId !== null ? COLORS.blue : COLORS.black}
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
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: Font.regular,
    fontWeight: 'bold'
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    borderWidth: 1,
    padding: 22,
    borderRadius: 12,
    paddingHorizontal: 4.5,
   
    gap: 10
  }
})
