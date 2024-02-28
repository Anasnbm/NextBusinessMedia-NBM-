import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Colors'

import SliderBox1 from '../../Component/CommonCard/SliderBox'
import CustomCard from '../../Component/CommonCard/CustomCard'
import axios from 'axios'
import { useEffect } from 'react'
import ApiData from '../../ApiData'
import { useState } from 'react'
const data = [
  {
    id: 1,
    image: require('../../../Assets/Images/location.png'),
    Location: 'Dubai',
    Date: 'Crowne Plaza\n Festival City Dubai',
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
    name: 'dr. Fel De Su',
    Designation: 'Founder',
    image3: require('../../../Assets/Images/google1.jpg'),
    name1: 'Microsoft'
  },
  {
    id: 2,
    image: require('../../../Assets/Images/calendar.png'),
    Location: 'Vanue-Date',
    Date: '03-OCT-2023 \n 05-oct-2023',
    image2: "https://agrinextcon.com/wp-content/uploads/2024/01/1-4.jpg",
    name: 'Ma Geelana',
    Designation: 'Co-Founder',
    image3: require('../../../Assets/Images/google1.jpg'),
    name1: 'facebook'
  },
  {
    id: 3,
    image: require('../../../Assets/Images/information.png'),
    Location: 'Dubai',
    Date: 'The AgriNext\n Conference',
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
    name: 'dr. Fel De Su',
    Designation: 'Founder',
    image3: require('../../../Assets/Images/google1.jpg'),
    name1: 'navindia'
  },
  {
    id: 4,
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-4.jpg',
    name: 'Ma Geelani',
    Designation: 'Founder',
    image3: require('../../../Assets/Images/google1.jpg'),
    name1: 'PhonePay'
  },

];


const Home = () => {
  const [speakerdata,setSpeakerData]=useState('')
  const FetchApiData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      // console.log(response.data.products);
      setSpeakerData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchApiData();
  }, []);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SliderBox1 />

      <CustomCard data={data} heading={'AgriNextConference'} RenderId={1} />
      <CustomCard data={speakerdata} heading={'Speakers'} RenderId={2} />
      <CustomCard data={speakerdata} heading={'Exhabitar'} RenderId={3} />
      <View style={{ marginBottom: 30 }}>

        <CustomCard data={speakerdata} heading={'Media Partner'} RenderId={3} />
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 13,

  }
})