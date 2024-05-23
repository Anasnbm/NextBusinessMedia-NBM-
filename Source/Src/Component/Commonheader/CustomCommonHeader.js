import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar ,TextInput} from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, Font } from '../../Theme/Colors';
const CustomCommonHeader = ({navigation}) => {
    const [text, setText] = useState('');
  return (
    <View style={{backgroundColor:COLORS.white}}>
     <View style={styles.containerHead}>
     <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../../Assets/Images/menu.png')}
          style={styles.menuIcon}
          tintColor={COLORS.white}
        />
      </TouchableOpacity>
     <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={styles.teXT}>Current Location</Text>
      <Text style={styles.teXT}>Noida Sec 16</Text>
     </View>
      <TouchableOpacity>
        <Image
          source={require('../../../Assets/Images/notification.png')}
          tintColor={COLORS.white}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      
      <Image source={require('../../.././Assets/Images/search.png')}
      style={styles.searchIcon} tintColor={COLORS.white}/>
    <TextInput
        style={{height: 50,color:COLORS.white}}
        placeholder="Search"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholderTextColor={COLORS.white}
        placeholderStyle={styles.placeholderStyle}
      />
    </View>

 
   </View>
   </View>
  )
}

export default CustomCommonHeader

const styles = StyleSheet.create({})