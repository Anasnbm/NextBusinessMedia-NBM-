import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { fetchUsers, searchData } from '../../Api/FatchData';
import { COLORS, Font } from '../../Theme/Colors';
import CustomHeader from '../../Component/Commonheader/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('window').width;

const AttendiesDetail = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState({});
  const [id,setId]=useState(1)
  const navigation = useNavigation()
  const vsual=()=>{
    setId(2)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);
 

  useEffect(() => {
    const searchUsers = async () => {
      try {
        if (searchQuery.trim() === '') {
          setFilteredUsers(users);
        } else {
          const searchDataResult = await searchData(searchQuery);
          setFilteredUsers(searchDataResult);
        }
      } catch (error) {
        console.error('Error searching users:', error);
      }
    };

    searchUsers();
  }, [searchQuery]);

  const renderItem = ({ item }) => {

    return (
      
          <>

          <TouchableOpacity style={styles.containerBox}
          onPress={()=>navigation.navigate('DetailsInformation', { data: item })}
          >
            <Image source={{ uri: item.thumbnail }} style={{ height: 100, width: 150, borderRadius: 8, }}
             />
            <Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: Font.regular, textAlign: 'center' }}>{item.title}</Text>
            <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: Font.regular, color: COLORS.blue }}>{`$${item.price}`}</Text>
          </TouchableOpacity>
     </>
    )
  }

  return (
    <View style={styles.container}>
      <CustomHeader back={true} left={true} title={'Attendiees'} OnPress={() => navigation.goBack()} />
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        numColumns={id==false ? 1 : 2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  containerBox: {
    borderColor: COLORS.blue,
    borderWidth: 1,
    padding: 10,
    marginRight: 15,
    borderRadius: 10,
    width: Width * 0.43,
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font.regular,
    textAlign: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Font.regular,
    color: COLORS.blue,
    marginTop: 5,
  },
});


export default AttendiesDetail
