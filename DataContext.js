import React, { createContext, useState, useEffect } from 'react';
import { COLORS } from './Source/Src/Theme/Colors';
import { AgreeNextEventdata, FinextEventdata } from './Source/Src/Screens/Deshbord/Home';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const mostDta = 
    
    [
       { MainDeshbord: COLORS.finext,
        Navigation: 'MainDeshbord'}
    ]
    
  

  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const { userData } = useSelector(state => state.auth);
  const token = userData.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.77.200.124:3002/api/events', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const apiData = response.data;

        const newItems = apiData.map(item => ({
          id: 1, 
          Icon: { uri: `http://3.77.200.124:3002${item.event_banner}` },
          text: item.about,
          Location: item.venue,
          DateTime:(item.event_date).split('T')[0],

          screens: {
            MainDeshbord: COLORS.finext, 
            Navigation: 'MainDeshbord', 
          },
        }));

        setData(newItems);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, [token]);

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
