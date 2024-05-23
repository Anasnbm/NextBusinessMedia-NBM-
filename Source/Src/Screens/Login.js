import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../Component/CommunButton/CustomButton';
import CustomTextinput from '../Component/CommonTextInput/CustomTextinput';
import { COLORS, Font } from '../Theme/Colors';
import { GoogleSignin, statusCodes  } from '@react-native-google-signin/google-signin';

const SignupSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number'),

});

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Login = () => {
    const [userInfo,setUserInfo]=useState(null)
    const navigation = useNavigation();
    useEffect(()=>{
        GoogleSignin.configure();
    })
    const signIn = async () => {
        console.log('first');
        try {
            await GoogleSignin.hasPlayServices();
            const userInformation = await GoogleSignin.signIn();
            console.log(userInformation);
            setUserInfo(userInformation);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error);
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error);
                // play services not available or outdated
            } else {
                console.log(error);
                // some other error happened
            }
            console.log('User not found');
        }
    };
    
    // Call the signIn function when you need to initiate the sign-in process
    

    return (
        <Formik
            initialValues={{

                email: '',
                password: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);

            }}
        >
            {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid }) => (
                <SafeAreaView style={styles.container}>
                    <Image source={require('../../Assets/Images/Ellipse.png')} style={styles.topImage} />
                  <ScrollView showsHorizontalScrollIndicator={false}>
                  <View style={styles.box}>
                        <Image source={require('../../Assets/Images/NBMLogo.png')} style={styles.img} />
                        <Text style={styles.Heading}>Login</Text>

                        <CustomTextinput
                            PlaceHolder={'Your Email'}
                            icons={require('../../Assets/Icons/mail.png')}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            error={errors.email}
                            touched={touched.email}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.validation}>{errors.email}</Text>
                        )}

                        <CustomTextinput
                            PlaceHolder={'Password'}
                            secure={true}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                            error={errors.password}
                            LockIcon={true}
                            icons={require('../../Assets/Icons/lock.png')}
                            touched={touched.password}
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.validation}>{errors.password}</Text>
                        )}

                        
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={[styles.texT, {  color:COLORS.primeryBlue, alignSelf: 'flex-end',marginTop:20 }]}
                            >Forget Password ?</Text>
                        </TouchableOpacity>
                        <View style={{width:'90%',alignSelf:'center'}}>
                        <CustomButton
                            title={'LOGIN'}
                            bgColor={COLORS.blue} // <-- Use bgColor instead of Bgcolor
                            textColor={COLORS.white} // <-- Use textColor instead of color
                            borderColor={COLORS.blue}
                            onPress={() => navigation.navigate('Deshbord')}
                        />
                        </View>
                      
                       <View style={styles.BottomContainer}>
                       <View style={styles.line}>
                            <View style={styles.leftLine}></View>
                            <Text style={styles.texT}>Or sign in with</Text>
                            <View style={styles.leftLine}></View>

                        </View>
                        <View style={[styles.line, { marginVertical: 20 }]}>
                        <TouchableOpacity onPress={()=>signIn()}>
                                <Image source={require('../../Assets/Images/google.png')} style={styles.sociaImage} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../Assets/Images/facebook.png')} style={styles.sociaImage} />
                            </TouchableOpacity>
                           
                            <TouchableOpacity>
                                <Image source={require('../../Assets/Icons/linkedin.png')} style={styles.sociaImage} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.texT, { alignSelf: 'center', marginTop: 10 }]}>You Don't Have Account?  <Text style={[styles.texT, { fontSize: 14, alignSelf: 'center', color: COLORS.primeryBlue, fontWeight: "700",marginTop:5 }]} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                        </Text>
                       </View>

                    </View>
                  </ScrollView>
                </SafeAreaView>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },


    heading1: {
        fontSize: 14,
        // color: COLORS.blue,
        fontWeight: '500',
        fontFamily: Font.regular,
        alignSelf: 'flex-end',
        marginVertical: 6
    },
    Image: {
        height: Height * 0.15,
        width: Width * 0.4,
        alignSelf: 'center'
    },
    validation: {
        fontSize: 12,
        color: COLORS.red,
        fontFamily: Font.regular,
    },

    box: {
        padding: 25,
        marginTop: Dimensions.get('screen').width * 0.2
    },
    Heading: {
        fontSize: 20,
        color: COLORS.black,
        fontWeight: '800',
        fontFamily: Font.semibold
    },

    img: {
        height: 350,
        width: 250,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 6
    },
    leftLine: {
        height: 1,
        width: '33%',
        backgroundColor: '#9e9e9e',

    },
    text: {
        color: COLORS.black,
        fontSize: 14,
    },
    sociaImage: {
        height: 30,
        width: 30,
    },
    img: {
        height: 80,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    topImage: {
        alignSelf: 'flex-end'
    },
    texT: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: Font.regular
      },
      BottomContainer:{
       marginTop:50
      }
});



export default Login
