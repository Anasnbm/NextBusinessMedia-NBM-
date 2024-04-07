import { ScrollView, StyleSheet, Text, TurboModuleRegistry, View,Image, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Colors'
import { fetchUsers } from '../../Api/FatchData'
import SliderBox1 from '../../Component/CommonCard/SliderBox'
import CustomCard from '../../Component/CommonCard/CustomCard'
import axios from 'axios'
import { useEffect } from 'react'

import { useState } from 'react'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 1,
    image: require('../../../Assets/Images/location.png'),
    Location: 'Vanue',
    Date: 'Crowne Plaza\n Festival City Dubai',
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
    name: 'dr. Fel De Su',
    Designation: 'Founder',
    image3: require('../../../Assets/Images/google1.jpg'),
    name1: 'Microsoft',
    screen:'MapContainer'
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
    name1: 'facebook',
    screen:'MyCalendar'
  },
  {
    id: 3,
    image: require('../../../Assets/Images/information.png'),
    Location: 'About',
    Date: 'The AgriNext\n Conference',
    image2: 'https://agrinextcon.com/wp-content/uploads/2024/01/1-5.jpg',
    name: 'dr. Fel De Su',
    Designation: 'Founder',
    image3: require('../../../Assets/Images/google1.jpg'),
    name1: 'navindia',
    screen:'Aboutus'
  },
  

];
const data1=[
  {
    id:1,
    image: require('../../../Assets/Images/SeeAll.jpg'),
  },
]


const Home = () => {
  const [speakerdata,setSpeakerData]=useState('')
  const navigation=useNavigation()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setSpeakerData(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
 
        <SliderBox1 />
     
          {/* <View style={styles.search}>
            <Image source={require('../../../Assets/Images/search.png')} style={styles.SerchIcon}/>
           <TextInput placeholder='Search Here' style={{width:'80%',left:10}}/>
        </View>
      */}


      <CustomCard data={data} heading={'Event Detail'} RenderId={1}  />
      <CustomCard data={speakerdata} heading={'Speakers'} RenderId={2} />
      <CustomCard data={data1} heading={'Attendees'} RenderId={4} />
      <CustomCard data={speakerdata} heading={'Exhabitar'} RenderId={5} />
      <CustomCard data={speakerdata} heading={'Media Partner'} RenderId={3} />
      <View style={{ marginBottom: 30 }}>
        <CustomCard data={speakerdata} heading={'Companies Attending'} RenderId={3} />
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

  },
 
  search:{
    height:45,
    width:'80%',
    backgroundColor:'#edf7f0',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    alignSelf:'center',
    bottom:-20,
    borderRadius:8,
    borderWidth:.5,
    // borderColor:'#F3FBF4'
    position:'absolute'
  },
  SerchIcon:{
      height:25,
      width:25
  }
})