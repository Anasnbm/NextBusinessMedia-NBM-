import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../Component/CommunButton/CustomButton';
import CustomTextinput from '../Component/CommonTextInput/CustomTextinput';
import { COLORS, Font } from '../Theme/Colors';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
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

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid }) => (
       
       
       <SafeAreaView style={styles.container}>
          


            <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
              <Image source={require('../../Assets/Images/Logo.jpg')} style={styles.Image} />
              <Text style={styles.Heading}>Signup</Text>
              <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={'padding'} keyboardVerticalOffset={100}>

            
              <CustomTextinput
                PlaceHolder={'Enter First Name'}
                icons={require('../../Assets/Images/user.png')}
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
                error={errors.firstName}
                touched={touched.firstName}
              />
              {touched.firstName && errors.firstName && (
                <Text style={styles.validation}>{errors.firstName}</Text>
              )}
              <CustomTextinput
                PlaceHolder={'Enter Last Name'}
                icons={require('../../Assets/Images/user.png')}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
                error={errors.lastName}
                touched={touched.lastName}

              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.validation}>{errors.lastName}</Text>
              )}
              <CustomTextinput
                PlaceHolder={'Enter Your Email'}
                icons={require('../../Assets/Images/email.png')}
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
                PlaceHolder={'Enter Your Phone'}
                icons={require('../../Assets/Images/Phone.png')}
                phone={true}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={() => setFieldTouched('phone')}
                error={errors.phone}
                touched={touched.phone}
              />
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
                touched={touched.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.validation}>{errors.password}</Text>
              )}
              <CustomTextinput
                PlaceHolder={' Confirm Password'}
                secure={true}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.validation}>{errors.confirmPassword}</Text>
              )}
              <CustomButton
                title={'SignUp'}
                bgColor={COLORS.blue} // <-- Use bgColor instead of Bgcolor
                textColor={COLORS.white} // <-- Use textColor instead of color
                borderColor={'blue'}
                onPress={handleSubmit}
              />

              <Text style={[styles.heading1, { fontSize: 18, alignSelf: 'center', color: 'black' }]}>You Have Account?</Text>
              <Text style={[styles.heading1, { fontSize: 18, alignSelf: 'center', color: '#4287f5', marginBottom: 20}]} onPress={() => navigation.navigate('Login')}>Login</Text>
              </KeyboardAvoidingView>
            </ScrollView>
        
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  box: {
    backgroundColor: "white",
    width: '85%',
    height: Height * 0.87,
    alignSelf: 'center',
    padding: 20,
    position: 'absolute',
    top: 40,
    flex:1,
    borderRadius: 20,
    shadowColor: "#000",
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    bottom:20
  },
  Heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    fontFamily: Font.regular
  },
  heading1: {
    fontSize: 18,
    color: '#4287f5',
    fontWeight: '500',
    fontFamily: Font.regular,
    alignSelf: 'flex-end',
    marginVertical: 6
  },
  Image: {
    height: Height * 0.1,
    width: Width * 0.4,
    alignSelf: 'center'
  },
  validation: {
    fontSize: 12,
    color: COLORS.red,
    fontFamily: Font.regular,
  }
});

export default Signup;
