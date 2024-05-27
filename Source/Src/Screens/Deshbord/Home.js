import { ScrollView, StyleSheet, Text, TurboModuleRegistry, View, Image, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Colors'
import { fetchUsers } from '../../Api/FatchData'
import SliderBox1 from '../../Component/CommonCard/SliderBox'
import CustomCard from '../../Component/CommonCard/CustomCard'
import axios from 'axios'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import { CompaneyData, Mediadata, data } from '../../Api/Data'
import { TransportData, MediaPartnerTransport } from '../../Api/DataTransPort'
import { attendiesData, speakerData } from '../../Api/FinextData'
import CommonCustomCard from '../../Component/CommonCard/CommonCustomCard'

export const FinextEventdata=[
  {
    BgImage:require('../../../Assets/Images/GirlImage.png'),
    name:"Finext Conference Moracco 2024",
    date:'25-26 September, 2024',
    time:'09:00 AM TO 6:00 PM',
    Location:'Marrakesh, Morocco',
    City:'Morocco',
    organizer:'Internetshine Technologies',
    TexT:'FiNext Conference is owned and supported by InternetShine Corp, USA. The conference was created to provide a digital hub and meeting place for the global financial sector, allowing tech start-ups, SMEs, incumbent tech providers, investors, institutions, and other stakeholders to connect and interact under one roof',
    companey:'organizer',
    CommonColor:COLORS.finext
  },
  {
    BgImage:require('../../../Assets/Images/GirlImage.png'),
    name:"Finext Conference Moracco 2024",
    date:'25-26 September, 2024',
    time:'09:00 AM TO 6:00 PM',
    Location:'Marrakesh, Morocco',
    City:'Morocco',
    organizer:'Internetshine Technologies',
    TexT:'FiNext Conference is owned and supported by InternetShine Corp, USA. The conference was created to provide a digital hub and meeting place for the global financial sector, allowing tech start-ups, SMEs, incumbent tech providers, investors, institutions, and other stakeholders to connect and interact under one roof',
    companey:'organizer',
    CommonColor:COLORS.finext
  },
]
export const AgreeNextEventdata=[
  {
    BgImage:require('../../../Assets/Images/GirlImage.png'),
    name:"AgriNext Conference Dubai 2024",
    date:'13-14 November 2024',
    time:'09:00 AM TO 6:00 PM',
    Location:'Crowne Plaza Dubai',
    City:'Dubai',
    organizer:'Internetshine Technologies',
    TexT:'FiNext Conference is owned and supported by InternetShine Corp, USA. The conference was created to provide a digital hub and meeting place for the global financial sector, allowing tech start-ups, SMEs, incumbent tech providers, investors, institutions, and other stakeholders to connect and interact under one roof',
    companey:'organizer',
    CommonColor:COLORS.green
  },
  {
    BgImage:require('../../../Assets/Images/GirlImage.png'),
    name:"AgriNext Conference Dubai 2024",
    date:'13-14 November 2024',
    time:'09:00 AM TO 6:00 PM',
    Location:'Crowne Plaza Dubai',
    City:'Dubai',
    organizer:'Internetshine Technologies',
    TexT:'FiNext Conference is owned and supported by InternetShine Corp, USA. The conference was created to provide a digital hub and meeting place for the global financial sector, allowing tech start-ups, SMEs, incumbent tech providers, investors, institutions, and other stakeholders to connect and interact under one roof',
    companey:'organizer',
    CommonColor:COLORS.green
  },
]



const Home = () => {
  const [speakerdata, setSpeakerData] = useState('')
  const [showId, setShowId] = useState('')
  const navigation = useNavigation()
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
  useEffect(() => {
    const getAsyncStorageData = async () => {
      try {
        const value = await AsyncStorage.getItem('selectedId');
        if (value !== null) {
          // Do something with the value, for example:
          // console.log('Selected ID from AsyncStorage:', value);
          setShowId(value)
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    getAsyncStorageData();
  }, []);


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {showId === '1' ?
        <>
          {/* <SliderBox1 /> */}
          <CommonCustomCard data={AgreeNextEventdata} heading={'Event Detail'} RenderId={1} shadowColor={COLORS.green} />
          <CommonCustomCard data={speakerData} RenderId={2} heading={'Speakers'} shadowColor={COLORS.green} />
          <CommonCustomCard data={data} RenderId={2} heading={'Attendees'} shadowColor={COLORS.green} />
          <CommonCustomCard data={speakerData} heading={'Exhibitor'} RenderId={3} shadowColor={COLORS.green} />
          <CommonCustomCard data={Mediadata} heading={'Media Partner'} RenderId={2} shadowColor={COLORS.green} />
          <View style={{ marginBottom: 30 }}>
            <CommonCustomCard data={CompaneyData} heading={'Companies Attending'} RenderId={2} shadowColor={COLORS.green} />
          </View>
        </>
        : null}
      {showId === '2' ?
        <>
          {/* <SliderBox1 /> */}
          <CommonCustomCard data={FinextEventdata} heading={'Event Detail'} RenderId={1} shadowColor={COLORS.finext} />
          <CommonCustomCard data={speakerData} RenderId={2} heading={'Speakers'} shadowColor={COLORS.finext} />
          <CommonCustomCard data={data} RenderId={2} heading={'Attendees'} shadowColor={COLORS.finext} />
          <CommonCustomCard data={speakerData} heading={'Exhibitor'} RenderId={3} shadowColor={COLORS.finext} />
          <CommonCustomCard data={Mediadata} heading={'Media Partner'} RenderId={2} shadowColor={COLORS.finext} />
          <View style={{ marginBottom: 30 }}>
          <CommonCustomCard data={CompaneyData} heading={'Companies Attending'} RenderId={2} shadowColor={COLORS.finext} />
          </View>
        </>
        : null}
      {
        showId === '5' ?
          <>
            {/* <SliderBox1 /> */}
            <CommonCustomCard data={data} heading={'Event Detail'} RenderId={1} shadowColor={COLORS.transport} />
          <CommonCustomCard data={speakerData} RenderId={2} heading={'Speakers'} shadowColor={COLORS.transport} />
          <CommonCustomCard data={data} RenderId={2} heading={'Attendees'} shadowColor={COLORS.transport} />
          <CommonCustomCard data={speakerData} heading={'Exhibitor'} RenderId={3} shadowColor={COLORS.transport} />
          <CommonCustomCard data={Mediadata} heading={'Media Partner'} RenderId={2} shadowColor={COLORS.transport} />
          <View style={{ marginBottom: 30 }}>
            <CommonCustomCard data={CompaneyData} heading={'Companies Attending'} RenderId={2} shadowColor={COLORS.transport} />
          </View>
          </> : null
      }

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

  search: {
    height: 45,
    width: '80%',
    backgroundColor: '#edf7f0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    alignSelf: 'center',
    bottom: -20,
    borderRadius: 8,
    borderWidth: .5,
    // borderColor:'#F3FBF4'
    position: 'absolute'
  },
  SerchIcon: {
    height: 25,
    width: 25
  }
})