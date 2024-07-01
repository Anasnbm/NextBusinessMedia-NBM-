import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { COLORS, Font } from '../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import CustomButton from '../../Component/CommunButton/CustomButton';
import { DataContext } from '../../../../DataContext';

const Width = Dimensions.get('window').width;

const Deshbord = () => {
  const { data, selectedId, setSelectedId, getBgColor } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
//  console.log(data)
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);


  const handleNext = () => {
    if (selectedId !== null) {
      const selectedItem = data.find(item => item.id === selectedId);
      if (selectedItem && selectedItem.screens) {
        navigation.navigate(selectedItem.screens.Navigation, { selectedId, bgColor: getBgColor() });
      }
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.maincontainerBox}>
        <TouchableOpacity
          style={[
            styles.containerBox,
            {
              backgroundColor: item.id === selectedId ? getBgColor() : COLORS.white,
              borderColor: item.id === selectedId ? COLORS.white : COLORS.black
            }
          ]}
          onPress={() => setSelectedId(item.id)}
        >
          <Image
            source={{ uri: item.Icon.uri }}
            style={[
              { height: Width * 0.20, width: Width * 0.20 },
              item.id === selectedId && { tintColor: COLORS.white }
            ]}
            resizeMode="cover"
          />
          <Text style={[styles.text, item.id === selectedId && { color: COLORS.white }]}>{item.text}</Text>
          <Text style={[styles.text1, item.id === selectedId && { color: COLORS.white }]}>{item.DateTime}</Text>
          <Text style={[styles.text1, item.id === selectedId && { color: COLORS.white }]}>{item.Location}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // If loading, show the ActivityIndicator
  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.white} />
      <CustomHeader
        title={'Industries'}
        left={true}
        back={true}
        OnPress={() => navigation.goBack()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
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
};

export default Deshbord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
    textAlign:'center'
  },
  containerBox: {
    alignItems: 'center',
    width: '100%',
    padding: 22,
    borderRadius: 12,
    paddingHorizontal: 4.5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  maincontainerBox: {
    width: '48%',
    height: 220,
    justifyContent: 'center',
  }
});
