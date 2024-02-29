import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View ,Dimensions} from 'react-native'
import React from 'react'
import CustomTextinput from './Component/CommonTextInput/CustomTextinput'
import CustomButton from './Component/CommunButton/CustomButton'
import Antdesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import CustomDropdown from './Component/CommonDropdown/CustomDropdown'

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Test1 = () => {
    const navigation=useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Images/agree.jpg')} resizeMode='contain' style={{height:Height*0.5,width:Width}}/>
      <View style={styles.box}>
        <Text style={styles.Heading}>Login</Text>
        <CustomTextinput PlaceHolder={'Enter Your Email'} icons={require('../Assets/Images/user.png')}/>
        <CustomTextinput PlaceHolder={'Password'} />
        
        <Text style={styles.heading1}>ForgetPassword</Text>


       <CustomButton title={'LOGIN'}/>
       <Text style={[styles.heading1,{fontSize:18,alignSelf:'center',color:'black'}]}>Or</Text>
       <View style={{alignItems:'center',flexDirection:'row',justifyContent:"center",gap:20}}>
        <TouchableOpacity>
            
            <Image source={require('../Assets/Images/google.png')}
             style={{height:Height*0.05,width:Width*0.08}} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity>
            
            <Image source={require('../Assets/Images/facebook.png')}
             style={{height:Height*0.06,width:Width*0.09}} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity>
            
            <Image source={require('../Assets/Images/twitter.png')}
             style={{height:Height*0.05,width:Width*0.06}} resizeMode='contain'/>
        </TouchableOpacity>
       </View>
        <Text  style={[styles.heading1,{fontSize:18,alignSelf:'center',color:'black'}]}>You Don't Have Account?</Text>
        <Text style={[styles.heading1,{fontSize:18,alignSelf:'center',color:'#4287f5',}]} onPress={()=>navigation.navigate('Signup')}>Create Account</Text>
        
      </View>
    </View>
  )
}

export default Test1

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"

    },
    box:{
        backgroundColor:"white",
        width:'85%',
        alignSelf:'center',
        padding:20,
        position: 'absolute',
        top: '30%',
        borderRadius:20,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.57,
shadowRadius: 15.19,

elevation: 23,
        // left: '15%',
        // right: '15%',
    },
    Heading:{
        fontSize:18,
        color:'black',
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
    },
    heading1:{
        fontSize:18,
        color:'#4287f5',
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        alignSelf:'flex-end',
        marginVertical:6
    }
})