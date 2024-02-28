import { StyleSheet, Text, View,SafeAreaView, } from 'react-native'
import React,{useState} from 'react'
import { COLORS } from '../../Theme/Colors'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { SliderBox } from "react-native-image-slider-box";
const SliderBox1 = () => {
  const [images, setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",

  ]);

  const handleImagePress = (index) => {
    console.warn(`image ${index} pressed`);
  };
  return (
      <>
   
   <SliderBox
        images={images}
          onCurrentImagePressed={handleImagePress}
         sliderBoxHeight={150}
        // // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor={COLORS.green}
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        // autoplay
        // circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          // paddingVertical: 10
        }}
        // dotStyle={{
        //   width: 10,
        //   height: 10,
        //   borderRadius: 5,
        //   marginHorizontal: 0,
        //   padding: 0,
        //   margin: 0,
        //   backgroundColor: "rgba(128, 128, 128, 0.92)"
        // }}
         ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5,right:12}}
         imageLoadingColor="#2196F3"
      />
    </>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        paddingHorizontal:12
        // marginTop:StatusBar.currentHeight
    }
})

export default SliderBox1

