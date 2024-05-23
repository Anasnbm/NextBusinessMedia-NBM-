import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import Modal from "react-native-modal";
import { COLORS, Font } from '../Theme/Colors';
import CustomButton from '../Component/CommunButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignOut = () => {
    const navigation=useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        navigation.navigate('Login')
      };
  return (
    <View>
      <Modal isVisible={!isModalVisible}>
        <View style={styles.mpdalContainer}>
            <View style={styles.upperContainer}>
                <Text style={styles.teXt}>SignOut</Text>
            </View>

            <Text style={[styles.teXt,{fontSize:16,color:COLORS.black,alignSelf:'center',marginTop:20}]}>Are you sure want to logout ?</Text>
            <View style={styles.bottomcontainer}>
                <CustomButton title={'  Cencel   '} bgColor={COLORS.green} borderColor={COLORS.green} onPress={toggleModal}/>
                <CustomButton title={'  Signout  '} bgColor={COLORS.green} borderColor={COLORS.green} onPress={toggleModal}/>
            </View>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </View>
  )
}

export default SignOut

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    teXt:{
      color:COLORS.white,
      fontFamily:Font.bold,
      fontSize:20,
      fontWeight:'800'
    },
    mpdalContainer:{
         flex: 0.25 ,
         backgroundColor:COLORS.white,
         borderRadius:10,
         shadowColor: COLORS.green,
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    },upperContainer:{
        height:'20%',
        backgroundColor:COLORS.green,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    bottomcontainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        width:'100%',
        marginTop:"5%"
    }
})