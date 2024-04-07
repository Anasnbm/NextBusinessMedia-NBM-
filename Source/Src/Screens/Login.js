import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../Component/CommunButton/CustomButton';
import CustomTextinput from '../Component/CommonTextInput/CustomTextinput';
import { COLORS, Font } from '../Theme/Colors';

const SignupSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number'),

});

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Login = () => {
    const navigation = useNavigation();

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
                    <Image source={require('../../Assets/Images/NBMLogo.png')} resizeMode='contain' style={{ height: Height * 0.6, width: Width }} />
                    <View style={styles.box}>
                        <Text style={styles.Heading}>Login</Text>

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

                        <CustomButton
                            title={'LOGIN'}
                            bgColor={COLORS.blue} // <-- Use bgColor instead of Bgcolor
                            textColor={COLORS.white} // <-- Use textColor instead of color
                            borderColor={'blue'}
                            onPress={() => navigation.navigate('Deshbord')}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                         <Text style={[styles.heading1, { fontSize: 18, alignSelf: 'center', color: '#4287f5',alignSelf:'flex-end' }]} 
                         >Forget Password</Text>
                        </TouchableOpacity>

                        <Text style={[styles.heading1, { fontSize: 18, alignSelf: 'center', color: 'black' }]}>You Don't Have Account?</Text>
                        <Text style={[styles.heading1, { fontSize: 18, alignSelf: 'center', color: '#4287f5', marginBottom: 40 }]} onPress={() => navigation.navigate('Signup')}>Signup</Text>
                       
                    </View>
                </SafeAreaView>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primery
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
        backgroundColor: "white",
        width: '100%',
        alignSelf: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius:30,
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
    Heading: {
        fontSize: 30,
        color: 'black',
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
    },
    heading1: {
        fontSize: 18,
        color: '#4287f5',
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        alignSelf: 'flex-end',
        marginVertical: 6
    }
});



export default Login
