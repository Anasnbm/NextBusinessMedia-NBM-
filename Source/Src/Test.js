import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { speakerData } from './Api/FinextData'
import { COLORS } from '../Src/Theme/Colors'

const Test = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.UpperContainer}>
        <View style={styles.box}>
          <Image  source={{uri:item.image2}} style={styles.Image2Style}/>
          <View style={{alignItems:'center'}}>
            <Text>{item.name}</Text>
            <Text>{item.designation}</Text>
          </View>
      </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={speakerData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text>Helo</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
   
  },
  box: {
    height: 140,
    width: 140,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    shadowColor: COLORS.red,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  UpperContainer:{
    height:160,
    width:155,
    alignItems:'center',
    justifyContent:'center'
  },
  Image2Style:{
    height:100,
      width:'100%',
      resizeMode:'stretch',
      borderTopLeftRadius:10,
      borderTopRightRadius:10
  }
})
