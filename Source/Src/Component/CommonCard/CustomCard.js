import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS, Font } from '../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';

import { CardApi } from '../../ApiData';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

// const ApiData=async()=>{
//   const fetchdata=axios.get(CardApi)
// }
const CustomCard = ({ data, heading, RenderId }) => {
 
  
  const navigation=useNavigation()
  const renderItem = ({ item }) => {
    if (RenderId === 1) {
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity style={{ alignItems: "center", paddingHorizontal: 10, gap: 5 }}
           >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.location}>{item.Location}</Text>
            <Text style={styles.date}>{item.Date}</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (RenderId === 2) {
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity style={{ alignItems: "center", paddingHorizontal: 10, gap: 5 }}
          onPress={()=>navigation.navigate('DetailsInformation',{
            data:item
          })}>
          <Image source={{ uri: item.thumbnail }} style={styles.image1} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.category}</Text>
          </TouchableOpacity>
        </View>
      );
    } 
    else if (RenderId === 3) {
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity style={{ alignItems: "center", paddingHorizontal: 10, gap: 5 }}
           onPress={()=>navigation.navigate('DetailsInformation',{
            data:item
          })}>
          <Image source={{uri: item.thumbnail }} style={styles.image1} />
            <Text style={styles.title}>{item.title}</Text>
            {/* <Text style={styles.description}>{item.Designation}</Text> */}
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{heading}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: 15
  },
  cardContainer: {
    // Your styles here
  },
  image: {
    width: 28,
    height: 28,
    marginTop: 13,
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: Font.regular
  },
  date: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.regular,
    textAlign: "center"
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: Font.regular
  },
  description: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.regular,
    textAlign: "center"
  },
  image1:{
    height:Height*0.10,
    width:Width*0.22,
    marginTop:10,
    borderRadius:15
  }
});

export default CustomCard;
