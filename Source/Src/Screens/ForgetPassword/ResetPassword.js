
import React, { useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomButton from '../../Component/CommunButton/CustomButton';
import { COLORS, Font } from '../../Theme/Colors';
import CustomTextinput from '../../Component/CommonTextInput/CustomTextinput'
import CustomHeader from '../../Component/Commonheader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
const SignupSchema = Yup.object().shape({

    password: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number'),
});

const ResetPassword = () => {
    const [showModal, setshowModal] = useState(false)
    const navigation = useNavigation()
    return (
        <Formik
            initialValues={{

                password: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);

            }}
        >
            {({ errors, touched, values, handleChange, setFieldTouched, handleSubmit, isValid }) => (

                <>
                    <View style={styles.container}>
                        <StatusBar translucent={false} backgroundColor={COLORS.white} />

                        <CustomHeader back={true}
                            title={'ForgetPassword'}
                            left={true}
                            OnPress={() => navigation.goBack()}
                        />
                        <Image source={require('../../../Assets/Images/Lock.png')}
                            style={{ alignSelf: 'center', marginTop: 30,tintColor:COLORS.blue }} />

                        {/* <Text style={styles.title}>Forget Password</Text> */}
                        <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 30, color: COLORS.black,fontFamily:Font.regular }}>Please Enter Registred Email Address</Text>
                        <CustomTextinput
                            PlaceHolder={'Password'}
                            secure={true}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                            error={errors.password}
                            LockIcon={true}
                            icons={require('../../../Assets/Icons/lock.png')}
                            touched={touched.password}
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.validation}>{errors.password}</Text>
                        )}
                        <CustomTextinput
                            PlaceHolder={'Confirm New Password'}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
                            error={errors.password}
                            touched={touched.password}
                            icons={require('../../../Assets/Icons/lock.png')}
                            secure={true}
                            LockIcon={true}
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.validation}>{errors.password}</Text>
                        )}

                        <View style={{ marginTop: 30 }}>

                            <CustomButton title={'Submit'} bgColor={COLORS.blue}
                                onPress={() => setshowModal(true)} />
                        </View>

                    </View>

                    <Modal isVisible={showModal} style={{ margin: 0 }}
                        backdropOpacity={0.5}
                        onBackdropPress={() => {
                            setshowModal(false)
                        }} onBackButtonPress={() => {
                            setshowModal(false)
                        }}>
                        <View style={styles.modalContainer}>
                            <Image source={require('../../../Assets/Images/Success.png')}
                                style={styles.modalImge} />
                            <Text style={styles.modalText}>Password Changed</Text>
                            <Text style={styles.modalText}>Password changed successfully, you can login again with a new password</Text>
                            <View style={{ width: '100%' }}>
                                <CustomButton bgColor={COLORS.blue} title={'Go To Login'}
                                    onPress={() => navigation.navigate('Login')} />
                            </View>
                        </View>
                    </Modal>

                </>



            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // marginTop:30,
        backgroundColor: COLORS.white
    },
    modalContainer: {
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 15,
        alignItems: 'center',

    },
    modalImge: {
        height: 250,
        width: 250,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    modalText: {
        fontSize: 14,
        color: COLORS.black,
        textAlign: 'center',
        fontWeight: "500",
        fontFamily: Font.regular
    }
})


export default ResetPassword

