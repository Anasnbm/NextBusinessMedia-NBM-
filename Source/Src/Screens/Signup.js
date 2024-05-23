import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../Component/CommunButton/CustomButton';
import CustomTextinput from '../Component/CommonTextInput/CustomTextinput';
import { COLORS, Font } from '../Theme/Colors';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Switch } from 'react-native-paper';
import CountryPickerComponent from '../Component/CommonTextInput/CountryPicker';
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  // lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]{10,13}$/, 'Phone number must be between 10 and 13 digits')
    .required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Signup = () => {
  const navigation = useNavigation();

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

  const showMessageHandler = (success) => {
    showMessage({
      message: success ? "User Added Successfully" : "User Already Registered",
      description: success ? "You have successfully registered." : "This email is already registered.",
      type: success ? "success" : "danger",
      icon: success ? "success" : "danger",
      duration: 3000,
      hideOnPress: true,
    });
  };

  const handleSignup = async (values) => {
    // console.log('hi')
    // const { firstName, lastName, email, phone, password,confirmPassword } = values;
    // try {
    //   // Create user with email and password
    //   const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    //   const user = userCredential.user;
    //   console.log(user)
    //   // await firebase.firestore().collection('Auth').doc('signIn').set({
    //   //   firstName: firstName,
    //   //   lastName: lastName,
    //   //   email: email,
    //   //   phone: phone,
    //   //   password:password,
    //   //   confirmPassword:confirmPassword
    //   // });
    //   const reference = database().ref(`/Auth/SignUp/${firstName}`).push(); // Generate a unique ID for the user
    //   await reference.set({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     phone: phone,
    //     password:password,
    //     confirmPassword:confirmPassword
    //   });
    //   // Optionally, you can also save additional user data to Firestore or Realtime Database

    //   console.log('User registered successfully:', user);
    //   // Navigate to the next screen or perform other actions
    // } catch (error) {
    //   console.error('Error signing up:', error);
    //   // Handle signup error (display error message, etc.)
    // }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        // lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        try {
          console.log('Signup values:', values);
          handleSignup(values)
          showMessageHandler(true);

        } catch (error) {
          console.error('Error signing up:', error);
          // Assuming the error is due to email already registered
          showMessageHandler(false);
          // Handle signup error (display error message, etc.)
        }

      }}
    >
      {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid }) => (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
          <StatusBar translucent={true} />
          <SafeAreaView style={styles.container}>
            {/* <Image source={require('../../Assets/Images/Ellipse1.png')} style={styles.topImage1} /> */}
            <Image source={require('../../Assets/Images/Ellipse.png')} style={styles.topImage} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image source={require('../../Assets/Images/NBMLogo.png')} style={styles.img} />

              <View style={styles.box} showsVerticalScrollIndicator={false}>
                {/* <Image source={require('../../Assets/Images/NBMLogo.png')} style={styles.Image} /> */}
                <Text style={[styles.Heading, { top: 8 }]}>Sign up</Text>

                <CustomTextinput
                  PlaceHolder={'First Name'}
                  icons={require('../../Assets/Icons/people.png')}
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={() => setFieldTouched('firstName')}
                  error={errors.firstName}
                  touched={touched.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={styles.validation}>{errors.firstName}</Text>
                )}
                {/* <CustomTextinput
                PlaceHolder={'Last Name'}
                icons={require('../../Assets/Images/user.png')}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
                error={errors.lastName}
                touched={touched.lastName}

              /> */}
                {touched.lastName && errors.lastName && (
                  <Text style={styles.validation}>{errors.lastName}</Text>
                )}
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
                <CountryPickerComponent
                  PlaceHolder={'Phone'}
                  icons={require('../../Assets/Icons/telephone.png')}
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                  error={errors.phone}
                  touched={touched.phone} />
                {touched.phone && errors.phone && (
                  <Text style={styles.validation}>{errors.phone}</Text>
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
                <CustomTextinput
                  PlaceHolder={'Confirm Password'}
                  secure={true}
                  value={values.confirmPassword}
                  icons={require('../../Assets/Icons/lock.png')}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  error={errors.confirmPassword}
                  LockIcon={true}
                  touched={touched.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.validation}>{errors.confirmPassword}</Text>
                )}
                <View style={{ alignSelf: 'flex-start', marginTop: 15, flexDirection: 'row', justifyContent: "space-between" }}>
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                    color={COLORS.blue} />
                  <Text style={styles.texT}>By Continuiting You Agree To NBM <Text style={styles.intrnalText}
                    onPress={() => navigation.navigate('TermAndConditon')}>Terms and PrivacyPolicy</Text></Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center',marginTop:20 }}>
                  <CustomButton
                    title={'SIGN UP'}
                    bgColor={COLORS.blue} // <-- Use bgColor instead of Bgcolor
                    textColor={COLORS.white} // <-- Use textColor instead of color
                    borderColor={COLORS.blue}
                    onPress={handleSubmit}
                  />
                </View>
                <Text style={[styles.texT, { alignSelf: 'center', marginTop: 10 }]}>Already have an account ?  <Text style={[styles.texT, { fontSize: 14, alignSelf: 'center', color: COLORS.primeryBlue, fontWeight: "700",left:30 }]} onPress={() => navigation.navigate('Login')}>Login</Text>
                </Text>
              </View>

            </ScrollView>

          </SafeAreaView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  box: {
    padding: 25,

  },
  Heading: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: '800',
    fontFamily: Font.semibold
  },
  heading1: {
    fontSize: 16,
    // color: COLORS.blue,
    fontWeight: '500',
    fontFamily: Font.regular,
    alignSelf: 'flex-end',
    marginVertical: 6
  },
  Image: {
    height: Height * 0.1,
    width: Width * 0.4,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  validation: {
    fontSize: 12,
    color: COLORS.red,
    fontFamily: Font.regular,
  },
  img: {
    height: 60,
    width: 150,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  topImage: {
    alignSelf: 'flex-end'
  },
  topImage1: {
    alignSelf: 'flex-start',
    position: 'absolute'
  },
  texT: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.regular
  },
  intrnalText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.bold,
    fontWeight: '800'
  }
});

export default Signup;
