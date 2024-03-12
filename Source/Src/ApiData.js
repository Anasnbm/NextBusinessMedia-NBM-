import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { fetchUsers } from './Api/FatchData';

const ApiData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
        console.log(fetchedUsers.products)
      } catch (error) {
        // Handle error
      }
    };

   

    getUsers();
  
  }, []);

  return (
    <View>
      <Text>ApiData</Text>
    </View>
  )
}

export default ApiData

const styles = StyleSheet.create({})