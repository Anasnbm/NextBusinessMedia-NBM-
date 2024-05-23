import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, Font } from '../../../Src/Theme/Colors'
import { useNavigation } from '@react-navigation/native'

const CommonCustomCard = ({ data, heading, RenderId, shadowColor }) => {


  const navigation = useNavigation()
  const renderItem = ({ item }) => {

    if (RenderId === 1) {
    //  console.log('shadow-------',shadowColor)
      return (
        <View style={styles.container1}>
          <View style={{ padding: 5, flexDirection: "row", gap: 20 }}>
            <Image source={require('../../../Assets/Images/GirlImage.png')}
              style={{ height: 135, width: 110, borderRadius: 10 }} />
            <View>

              <Text style={[styles.Heading, { width: '55%', fontSize: 20 }]}>Finext Conference Moracco 2024</Text>
              <Text style={styles.Heading}>25 Sep-26 Sep 2024</Text>
              <View>
                <View style={{ flexDirection: "row", marginTop: 10, gap: 20, alignItems: 'center' }}>
                  <Image source={require('../../../Assets/Images/location.png')}
                    style={{ height: 20, width: 20, }} />
                  <Text>Moracco</Text>
                  <TouchableOpacity style={[styles.btn,{ shadowColor: shadowColor, backgroundColor:shadowColor}]}>
                    <Text style={[styles.normalText, { color: COLORS.white }]}>Join</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )
    }
    if (RenderId === 2) {
      return (
        <View style={styles.UpperContainer}>
          <TouchableOpacity style={[styles.box, { shadowColor: shadowColor, }]}
          onPress={() => navigation.navigate('DetailsInformation', { data: item })}>
            <Image source={{ uri: item.image2 }} style={styles.BoxImage} />
            <View style={styles.BoxBottom}>
              <Text style={styles.boldText}>{item.name}</Text>
              <Text style={styles.normalText}>{item.designation}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    if(RenderId===3){
      return(
        <View style={[styles.Container4]}>
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
            <Text style={styles.Heading}>{item.name}</Text>
            <Text style={styles.normalText}>{item.name1}</Text>
          </View>
        </View>
      )
    }
    else {
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.Heading,]}>{heading}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {RenderId === 2 && <Text style={[styles.seeAll, { color: shadowColor }]} onPress={() => navigation.navigate('AttendiesDetail')}>See More</Text>}
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    paddingVertical: 16
    // paddingHorizontal: 16,

  },
  box: {
    height: 140,
    width: 140,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  UpperContainer: {
    height: 160,
    width: 155,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BoxImage: {
    height: 100,
    width: '100%',
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  BoxBottom: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 4,
    alignSelf: 'center'
  },
  boldText: {
    fontSize: 14,
    fontFamily: Font.regular,
    fontWeight: '700',
    color: COLORS.black,
    textAlign:'center',

  },
  normalText: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: Font.regular,
    fontWeight: '500',
    textAlign:'center',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '700',
    position: 'absolute',
    right: 0,
    top: 16,
    color: COLORS.green

  },
  Heading: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.regular,
    fontWeight: '700',
    // textAlign:'center',
  },
  container1: {
    height: 150,
    width: 320,
    // borderWidth:1,
    // borderColor:'red',
    marginRight: 10,
    marginTop: 5,

  },
  btn: {
    height: 30,
    width: 60,
    backgroundColor: COLORS.finext,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  Container4: {
    justifyContent: 'space-between',
    alignItgems: 'center',
    borderWidth:0.5,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    marginRight:10,
    width:132,
    height:145
  },
})


export default CommonCustomCard

