import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { fetchUsers, searchData } from './Api/FatchData';
import { COLORS, Font } from './Theme/Colors';

const Width = Dimensions.get('window').width;

const Test = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState({});

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
  const toggleSelection = (id) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

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
    const isSelected = selectedItems[item.id] === true;
    return (
      <TouchableOpacity
        style={[
          styles.containerBox,
          { borderColor: isSelected ? 'blue' : 'blue' }
        ]}
        onPress={() => toggleSelection(item.id)}>
        {isSelected ? (
          <>
            
            <Text style={{ fontSize: 14, fontWeight: '500', fontFamily: Font.regular }}>{item.description}</Text>
            <View style={{ flexDirection: 'row', gap: 10,marginTop:30}}>
              <TouchableOpacity>
                <Image source={require('../Assets/Images/users/SocalImage/Email.png')} style={{ height: 30, width: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Assets/Images/users/SocalImage/facebook.png')} style={{ height: 30, width: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Assets/Images/users/SocalImage/twiter.png')} style={{ height: 30, width: 30 }} />
              </TouchableOpacity>

            </View>
          </>
        ) : (
          <>
            <Image source={{ uri: item.thumbnail }} style={{ height: 120, width: 120, borderRadius: 15, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: Font.regular, textAlign: 'center' }}>{item.title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '500', fontFamily: Font.regular, color: COLORS.blue }}>{`$${item.price}`}</Text>
          </>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  containerBox: {
    borderColor: COLORS.blue,
    borderWidth: 1,
    padding: 15,
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
