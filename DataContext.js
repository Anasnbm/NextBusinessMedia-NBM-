import React, { createContext, useState, useEffect } from 'react';
import { COLORS } from './Source/Src/Theme/Colors';
import { AgreeNextEventdata, FinextEventdata } from './Source/Src/Screens/Deshbord/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      Icon: require('./Source/Assets/Images/AgreeCon.png'),
      text: 'AgriTech',
      Location:'Crowne Plaza Dubai',
      DateTime:'13-14 November 2024',
      screens: {
        MainDeshbord: COLORS.green,
        Navigation:'MainDeshbord'
      }
    },
    {
      id: 2,
      Icon: require('./Source/Assets/Images/finext.png'),
      text: 'FinTech',
      Location:'Morocco',
      DateTime:'25-26 September 2024',
      screens: {
        MainDeshbord: COLORS.finext,
       Navigation:'MainDeshbord'
      }
    },
    {
      id: 3,
      Icon: require('./Source/Assets/Images/EnergyEvolutionicon.png'),
      text: 'EnergyNext',
      Location:'Madrid,Spain',
      DateTime:'13-15 March 2025',
      screens: {
        MainDeshbord: COLORS.energyNext,
        Navigation:'MainDeshbord'
      }
    },
    {
      id: 4,
      Icon: require('./Source/Assets/Images/TransportNexicon.png'),
      text: 'Transport & Logistic',
      Location:'Singapore',
      DateTime:'10-11 October',
      screens: {
        MainDeshbord: COLORS.transport,
        Navigation:'MainDeshbord'
      }
    },
   
    {
      id: 5,
      Icon: require('./Source/Assets/Images/AICIcon.png'),
      text: 'AfricaIT',
      DateTime:'comming soon',
  
      screens: {
        MainDeshbord: COLORS.africaNext,
        Navigation:'TestingScreen'
      }
    },
   
    {
      id: 6,
      Icon: require('./Source/Assets/Images/CityNextExpicon.png'),
      text: 'Urban Planning',
      DateTime:'comming soon',
      screens: {
        MainDeshbord: COLORS.urbanPlanning,
        Navigation:'TestingScreen'
     
      }
    },
    {
      id: 7,
      Icon: require('./Source/Assets/Images/CityNextExpicon.png'),
      text: 'PropTech',
      DateTime:'comming soon',
      screens: {
        MainDeshbord: COLORS.propnext,
        Navigation:'TestingScreen'
      }
    },
    
    {
      id: 8,
      Icon: require('./Source/Assets/Images/FoodNextIcon.png'),
      text: 'FoodNext',
      DateTime:'comming soon',
      screens: {
        MainDeshbord: COLORS.foodNext,
        Navigation:'TestingScreen'
      }
    }
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState('MainDeshbord');
  const [events, setEvents] = useState({
    finext: FinextEventdata,
    agrinext: AgreeNextEventdata,
  });

  const getBgColor = () => {
    const selectedItem = data.find(item => item.id === selectedId);
    return selectedItem?.screens[selectedScreen] || COLORS.default;
  };

  return (
    <DataContext.Provider value={{ data, setData, events, setEvents, selectedId, setSelectedId, selectedScreen, setSelectedScreen, getBgColor }}>
      {children}
    </DataContext.Provider>
  );
};
