import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import CustomButton from '../Component/CommunButton/CustomButton';
import CustomTextinput from '../Component/CommonTextInput/CustomTextinput';
import { COLORS, Font } from '../Theme/Colors';
import { showMessage } from "react-native-flash-message";
import { Switch } from 'react-native-paper';
import CountryPickerComponent from '../Component/CommonTextInput/CountryPicker';
import { SignupApi } from '../Api/Authentication';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  CompaneyName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]{10,13}$/, 'Phone number must be between 10 and 13 digits')
    .required('Required'),
  Companey_phone: Yup.string()
    .matches(/^[0-9]{10,13}$/, 'Phone number must be between 10 and 13 digits')
    .required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(15, 'Too Long!').required('Required')
});

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Signup = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
    const url = SignupApi;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
  
      const response = await axios.post(url, {
        name: values.fullName,
        email: values.email,
        company: values.CompaneyName,
        personal_phone: values.phone,
        company_phone: values.Companey_phone,
        password: values.password,
      }, config);
  
      console.log('Registration successful', response);
  
      if (response.data.message != "User already exists") {
        navigation.navigate('Login')
        showMessageHandler(true)
        // Alert.alert('Success', 'SignUp Successfully!');
      }
  
    } catch (error) {
      console.error('Error registering user', error.response ? error.response.data : error.message);
      // Alert.alert('Error', 'Error Mil rha h');
      showMessageHandler(false)
    }
  };
  
  

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        CompaneyName: '',
        phone: '',
        Companey_phone: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        handleSignup(values)
        resetForm();
      }}
       
      
    >
      {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid }) => (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
          <StatusBar translucent={true} />
          <SafeAreaView style={styles.container}>
            <Image source={require('../../Assets/Images/Ellipse.png')} style={styles.topImage} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image source={require('../../Assets/Images/NBMLogo.png')} style={styles.img} />

              <View style={styles.box}>
                <Text style={[styles.Heading, { top: 8 }]}>Sign up</Text>

                <CustomTextinput
                  PlaceHolder={'Full Name'}
                  icons={require('../../Assets/Icons/people.png')}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  onBlur={() => setFieldTouched('fullName')}
                  error={errors.fullName}
                  touched={touched.fullName}
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.validation}>{errors.fullName}</Text>
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

                <CustomTextinput
                  PlaceHolder={'Your Companey Name'}
                  icons={require('../../Assets/Icons/people.png')}
                  value={values.CompaneyName}
                  onChangeText={handleChange('CompaneyName')}
                  onBlur={() => setFieldTouched('CompaneyName')}
                  error={errors.CompaneyName}
                  touched={touched.CompaneyName}
                />
                {touched.CompaneyName && errors.CompaneyName && (
                  <Text style={styles.validation}>{errors.CompaneyName}</Text>
                )}

                <CountryPickerComponent
                  PlaceHolder={'Personal Phone'}
                  icons={require('../../Assets/Icons/telephone.png')}
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                  error={errors.phone}
                  touched={touched.phone}
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.validation}>{errors.phone}</Text>
                )}

                <CountryPickerComponent
                  PlaceHolder={'Company Phone'}
                  icons={require('../../Assets/Icons/telephone.png')}
                  value={values.Companey_phone}
                  onChangeText={handleChange('Companey_phone')}
                  onBlur={() => setFieldTouched('Companey_phone')}
                  error={errors.Companey_phone}
                  touched={touched.Companey_phone}
                />
                {touched.Companey_phone && errors.Companey_phone && (
                  <Text style={styles.validation}>{errors.Companey_phone}</Text>
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

                <View style={{ alignSelf: 'flex-start', marginTop: 15, flexDirection: 'row', justifyContent: "space-between" }}>
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={COLORS.blue} />
                  <Text style={[styles.texT,{width:'95%'}]}>By continuing, you agree to NBM's <Text style={styles.intrnalText} onPress={() => navigation.navigate('TermAndConditon')}>Terms and Privacy Policy</Text></Text>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
                  <CustomButton
                    title={'SIGN UP'}
                    bgColor={COLORS.blue}
                    textColor={COLORS.white}
                    borderColor={COLORS.blue}
                    onPress={handleSubmit}
                  />
                </View>

                <Text style={[styles.texT, { alignSelf: 'center', marginTop: 10 }]}>Already have an account? <Text style={[styles.texT, { fontSize: 14, alignSelf: 'center', color: COLORS.primeryBlue, fontWeight: "700", left: 30 }]} onPress={() => navigation.navigate('Login')}>Login</Text>
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
    fontFamily: Font.semibold,
  },
  heading1: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Font.regular,
    alignSelf: 'flex-end',
    marginVertical: 6,
  },
  Image: {
    height: Height * 0.1,
    width: Width * 0.4,
    alignSelf: 'center',
    resizeMode: 'contain',
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
    alignSelf: 'center',
  },
  topImage: {
    alignSelf: 'flex-end',
  },
  topImage1: {
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  texT: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.regular,
  },
  intrnalText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: Font.bold,
    fontWeight: '800',
  },
});

export default Signup;
