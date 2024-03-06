import { Image, StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, Font } from '../../Theme/Colors'
import axios from 'axios'
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';


const UpcomingEvents = () => {
  const [ApiData, setData] = useState([]);
  const navigation=useNavigation();

  const apiData = async () => {
    try {
      const res = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities');
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  const renderItem = ({ item }) => {
    const date = item.dueDate.substring(0, 10); 
    return (
      <View style={styles.container}>
        <Image
        source={require('../../../Assets/Images/AgriNextLogo.png')}
        style={styles.logo}
        resizeMode='contain'
      />
        <Text style={styles.headingText}>{item.title}</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
    );
  };

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{padding:15}}>

      <CustomHeader title={'Events'} back={true} left={true} OnPress={()=>navigation.goBack()}/>
      </View>
      <FlatList
        data={ApiData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  container: {
     backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 15,
    flex:1,
    marginTop:10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
  },
  logo: {
    height: 100,
    alignSelf: 'flex-end',
    width: 200,
  },
  text: {
    // position: 'absolute',
    // left: 15,
    color: 'black',
    fontSize: 14,
    fontFamily: Font.regular
  },
  headingText:{
    position:'absolute',left:15,top:15,color:'black',fontSize:18
  }
});
