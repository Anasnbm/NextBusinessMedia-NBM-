


import React, { useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomButton from '../../Component/CommunButton/CustomButton';
import { COLORS, Font } from '../../Theme/Colors';
import CustomTextinput from '../../Component/CommonTextInput/CustomTextinput'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
const SignupSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Required'),
});

const ForgetPassword = () => {
    const navigation = useNavigation()
    return (
        <Formik
            initialValues={{

                email: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);

            }}
        >
            {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid }) => (
                <View style={styles.container}>
                    <StatusBar translucent={false} backgroundColor={COLORS.white} />

                    <CustomHeader back={true}
                        title={'ForgetPassword'}
                        left={true}
                        OnPress={() => navigation.goBack()}
                    />
                    <Image source={require('../../../Assets/Images/Lock.png')}
                        style={{ alignSelf: 'center', marginTop: 30 ,tintColor:COLORS.blue}} />

                    {/* <Text style={styles.title}>Forget Password</Text> */}
                    <Text style={{ fontSize: 14, textAlign: 'center', marginVertical: 30, color: COLORS.black ,fontFamily:Font.regular}}>Please Enter Registred Email Address</Text>
                    <CustomTextinput
                        PlaceHolder={'Enter Your Email'}
                        icons={require('../../../Assets/Icons/mail.png')}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        error={errors.email}
                        touched={touched.email}
                    />
                    {touched.email && errors.email && (
                        <Text style={styles.validation}>{errors.email}</Text>
                    )}


                    <View style={{ marginTop: 30 }}>

                        <CustomButton title={'Submit'} bgColor={COLORS.blue} onPress={() => navigation.navigate('EmailVarification')} />
                    </View>
                </View>
            )}
        </Formik>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // marginTop:30,
        backgroundColor: COLORS.white
    }
})
