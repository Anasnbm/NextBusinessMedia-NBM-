import React, { createContext, useState } from 'react';
import { COLORS } from './Source/Src/Theme/Colors';
import { AgreeNextEventdata, FinextEventdata } from './Source/Src/Screens/Deshbord/Home';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
        id: 1,
        Icon: require('./Source/Assets/Images/AgreeCon.png'),
        text: 'AgriTech',
        screen: 'MainDeshbord',
        bgColor:COLORS.green,
      },
      {
        id: 2,
        Icon: require('./Source/Assets/Images/finext.png'),
        text: 'FinTech',
        screen: 'MainDeshbord',
        bgColor:COLORS.finext,
      },
      {
        id: 3,
        Icon: require('./Source/Assets/Images/CityNextExpicon.png'),
        text: 'PropTech',
        screen: 'MainDeshbord',
   
      },
      {
        id: 4,
        Icon: require('./Source/Assets/Images/AICIcon.png'),
        text: 'AfricaIT',
        screen: 'MainDeshbord'
      },
      {
        id: 5,
        Icon: require('./Source/Assets/Images/TransportNexicon.png'),
        text: 'Transport & \n Logistic',
        screen: 'MainDeshbord',
        bgColor:COLORS.transport
      },
      {
        id: 6,
        Icon: require('./Source/Assets/Images/CityNextExpicon.png'),
        text: 'Urban Planning',
        screen: 'MainDeshbord'
      },
      {
        id: 7,
        Icon: require('./Source/Assets/Images/EnergyEvolutionicon.png'),
        text: 'EnergyNext',
        screen: 'MainDeshbord'
      },
      {
        id: 8,
        Icon: require('./Source/Assets/Images/FoodNextIcon.png'),
        text: 'FoodNext',
        screen: 'MainDeshbord'
      },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const [events, setEvents] = useState({
    finext: FinextEventdata,
    agrinext: AgreeNextEventdata,
  });
  const getBgColor = () => {
    const selectedItem = data.find(item => item.id === selectedId);
    return selectedItem?.bgColor 
  };
  return (
    <DataContext.Provider value={{ data, setData, events, setEvents, selectedId, setSelectedId, getBgColor}}>
      {children}
    </DataContext.Provider>
  );
};
