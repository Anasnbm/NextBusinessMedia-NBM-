import React, { createContext, useState } from 'react';
import { COLORS } from './Source/Src/Theme/Colors';

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

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
