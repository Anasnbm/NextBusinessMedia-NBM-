// src/screens/Login.js

import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../Component/CommunButton/CustomButton';
import CustomTextinput from '../Component/CommonTextInput/CustomTextinput';
import { COLORS, Font } from '../Theme/Colors';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { loginUser } from '../Api/Authentication'; // Import the loginUser function
import { showMessage } from "react-native-flash-message";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required')
    
});

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();
  const showMessageHandler = (success) => {
    showMessage({
      message: success ? "User Login Successfully" : "User Not Registered",
      description: success ? " successfully Login." : "This email is Not registered.",
      type: success ? "success" : "danger",
      icon: success ? "success" : "danger",
      duration: 3000,
      hideOnPress: true,
    });
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInformation = await GoogleSignin.signIn();
      setUserInfo(userInformation);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Error signing in: ', error);
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values,) => {
        try {
          const response = await loginUser(values.email, values.password);
          console.log('Login successful', response);
          // Navigate to Dashboard on success
          await navigation.navigate('Deshbord');
          showMessageHandler(true);
        } catch (error) {
            console.error('Error registering user', error.response ? error.response.data : error.message);
            showMessageHandler(false, error.response ? error.response.data.message : error.message);
        } 
      }}
    >
      {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid, isSubmitting }) => (
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
                <Text style={[styles.texT, { color: COLORS.primeryBlue, alignSelf: 'flex-end', marginTop: 20 }]}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
              <View style={{ width: '90%', alignSelf: 'center' }}>
                <CustomButton
                  title={'LOGIN'}
                  bgColor={COLORS.blue}
                  textColor={COLORS.white}
                  borderColor={COLORS.blue}
                  onPress={handleSubmit}
                  disabled={isSubmitting || !isValid}
                />
              </View>
              <View style={styles.BottomContainer}>
                <View style={styles.line}>
                  <View style={styles.leftLine}></View>
                  <Text style={styles.texT}>Or sign in with</Text>
                  <View style={styles.leftLine}></View>
                </View>
                <View style={[styles.line, { marginVertical: 20 }]}>
                  <TouchableOpacity onPress={signIn}>
                    <Image source={require('../../Assets/Images/google.png')} style={styles.sociaImage} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('../../Assets/Images/facebook.png')} style={styles.sociaImage} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('../../Assets/Icons/linkedin.png')} style={styles.sociaImage} />
                  </TouchableOpacity>
                </View>
                <Text style={[styles.texT, { alignSelf: 'center', marginTop: 10 }]}>
                  You Don't Have Account? 
                  <Text style={[styles.texT, { fontSize: 14, alignSelf: 'center', color: COLORS.primeryBlue, fontWeight: "700", marginTop: 5 }]} onPress={() => navigation.navigate('Signup')}>
                    Sign Up
                  </Text>
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
    fontWeight: '500',
    fontFamily: Font.regular,
    alignSelf: 'flex-end',
    marginVertical: 6,
  },
  Image: {
    height: Height * 0.15,
    width: Width * 0.4,
    alignSelf: 'center',
  },
  validation: {
    fontSize: 12,
    color: COLORS.red,
    fontFamily: Font.regular,
  },
  box: {
    padding: 25,
    marginTop: Dimensions.get('screen').width * 0.2,
  },
  Heading: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: '800',
    fontFamily: Font.semibold,
  },
  img: {
    height: 80,
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 6,
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
  topImage: {
    alignSelf: 'flex-end',
  },
  texT: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.regular,
  },
  BottomContainer: {
    marginTop: 50,
  },
});

export default Login;
