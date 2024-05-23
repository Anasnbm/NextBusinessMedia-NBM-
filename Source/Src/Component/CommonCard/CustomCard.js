import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, Font } from '../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { Banner } from 'react-native-paper';
import { makeMutable } from 'react-native-reanimated';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CustomCard = ({ data, heading, RenderId, shadowColors}) => {
  // console.log('colors',shadowColors)
  // console.log('first',RenderId)
  const [selectTabe, setselectTabe] = useState(0)
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleData, setVisibleData] = useState([]);

  const navigation = useNavigation()

  useEffect(() => {
    if (data) {
      setVisibleData(showAll ? data : data.slice(0, 9));
    } else {
      setVisibleData([]);
    }
  }, [data, showAll]);

  const renderItem = ({ item, index }) => {
    if (RenderId === 1) {
      return (
        <View style={[styles.cardContainer,]}>
          <TouchableOpacity
            style={[styles.Card1, { backgroundColor: selectTabe === index ? COLORS.green : COLORS.white, borderWidth: selectTabe === index ? 0.4 : 0.4 }]}
            onPress={() => {
              setselectTabe(index);
              navigation.navigate(item.screen);
            }} >
            <Image source={item.image}
              style={styles.image}
              tintColor={selectTabe === index ? COLORS.white : COLORS.black} />
            <Text style={[styles.location, { color: selectTabe === index ? 'white' : 'black' }]}>{item.Location}</Text>
            <Text style={[styles.date, { color: selectTabe === index ? 'white' : 'black' }]}>{item.Date}</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (RenderId === 2) {
      return (
        <View style={styles.Container4}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('DetailsInformation', { data: item })}
          >
            <Image
              source={{uri:item.image2}}
              style={[ {  borderRadius: 10,width:120,height:100 }]}
            />
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <Text style={styles.TexT}>{item.name}</Text>
            <Text style={styles.TexT}>{item.name1}</Text>
          </View>
        </View>
      );
    } else if (RenderId === 3) {
      if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <DotIndicator color={COLORS.white} size={20} />
          </View>
        );
      }

      return (
        <View style={styles.cardContainer5}>
          <TouchableOpacity
            style={{ height: 60, borderWidth: 0.5, borderRadius: 10, width: 65 }}
            onPress={() => navigation.navigate('DetailsInformation', { data: item })}
          >
            <Image source={{ uri: item.thumbnail }} style={styles.image5} />
          </TouchableOpacity>
          <Text style={styles.TexT}>{`$${item.price}`}</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {RenderId === 3 ? (
        <View style={[styles.container,{shadowColor: shadowColors,}]}>
          <Text style={[styles.location, { color: COLORS.black, fontSize: 16 }]}>{heading}</Text>
          {visibleData.length > 0 ? (
            <FlatList
              data={visibleData}
              renderItem={renderItem}
              horizontal={false}
              numColumns={5}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No data available</Text>
            </View>
          )}
          {data && data.length > 9 && (
            <>
              <TouchableOpacity onPress={() => setShowAll(!showAll)}
              style={showAll ? styles.renderid51 : styles.renderid5}>
                <Image source={require('../../../Assets/Images/Greater.png')} style={{height:30,width:30}} tintColor={COLORS.white}/>
              </TouchableOpacity>
              <Text style={showAll ? styles.seelessText : styles.semoreText}>{showAll ? "See Less" : "See More"}</Text>
            </>
          )}
        </View>
      ) : (
        <View style={[RenderId === 1 || RenderId === 2 || RenderId === 4 ? styles.container : styles.container2, {marginTop:RenderId === 1 ? 0 : 20,shadowColor: shadowColors,}]}>
          <Text style={[styles.location, { color: COLORS.black, fontSize: 16 }]}>{heading}</Text>
          {data ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No data available</Text>
            </View>
          )}
          {RenderId === 2 && <Text style={styles.seeAll} onPress={() => navigation.navigate('AttendiesDetail')}>See More</Text>}
        </View>
      )}
    </>
  );
};




const styles = StyleSheet.create({
  container: {

    paddingVertical: 10,
    backgroundColor: COLORS.white,
    // borderRadius: 15,
    // borderWidth:0.5,
    shadowColor: COLORS.green,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: 20
  },


  cardContainer: {

    width: 140,
    marginRight: 10,
    marginTop: 10,


  },
  cardContainer4: {
 height:140,
    width: 140,
    marginRight: 10,
    marginTop: 10,
    borderWidth:0.5,
    borderRadius:15,
  backgroundColor:COLORS.green

  },
  cardContainer5: {
    
    width: '17%',
    marginRight: 10,
    marginTop: 10,
    // height:120

  },
  image: {
    width: 28,
    height: 28,
    marginTop: 10,

  },
  location: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.white,
    fontFamily: Font.regular
  },
  date: {
    fontSize: 12,
    color: COLORS.white,
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
  image1: {
    height: Height * 0.15,
    width: '100%',
    // marginTop: 10,
    borderRadius: 15,

  }, Card1: {
    alignItems: "center",
    paddingHorizontal: 8,
    gap: 5,
    padding: 6,
    borderRadius: 10
  },
  Card2: {
    alignItems: "center",
    // paddingHorizontal: 10, 
    gap: 5,
    backgroundColor: COLORS.white,
    borderWidth: 0.3,
    // padding:10,
    borderRadius: 10,
    shadowColor: "#9f99f9",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  }, card1Name: {
    
   

  },
  image2: {
    height: Height * 0.1,
    width: '100%',
    // marginTop: 10,
    // borderRadius: 15,
    resizeMode: 'contain'

  },
  image3: {
    height: '100%',
    width: '100%',
    // marginTop: 10,
     borderRadius: 15,
    resizeMode: 'stretch',
    

  },
  image5: {
    height: '100%',
    width: '100%',
    // marginTop: 10,
    // borderRadius: 15,
    // resizeMode: 'contain'
    resizeMode:'stretch',
    borderRadius:10

  },
  clickHere: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '800',
   
    alignSelf: 'center',
    fontFamily: Font.regular,
    fontSize:14

  },
  seeAll: {
    fontSize: 16,
    fontWeight: '600',
    position:'absolute',
    right:0,
    top:10,
    color: COLORS.green

  },
  container1: {
    width: "100%",
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20, 
    alignItems: 'center'
  },
  Container4: {
    justifyContent: 'space-between',
    // flexDirection: 'row',
    alignItgems: 'center',
    // gap: 100,
    // height:40,
    // width:'100%',
    // backgroundColor:'#d9fac8',
    borderWidth:0.5,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    marginRight:10,
    width:132,
    height:145
  },
  renderid5:{
    height:60,
    width:60,
    backgroundColor:COLORS.green,
    borderRadius:10,
    position:'absolute',
    bottom:30,
    right:20,
    alignItems:'center',
    justifyContent:'center',
   
  },
  renderid51:{
    height:60,
    width:60,
    backgroundColor:COLORS.green,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
   
  },
  TexT:{
    alignSelf:'center',
    color:COLORS.black,
    fontSize:14,
    fontFamily: Font.regular,
    textAlign:'center'
  },
  semoreText:{
     position:'absolute',
     position:'absolute',
     bottom:10,
     right:20,
    color:COLORS.green
  },
  seelessText:{
    color:COLORS.green,
    // bottom:-20,
    // position:'absolute',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    borderRadius: 10,
    padding: 10,
  },

});

export default CustomCard;