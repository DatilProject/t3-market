import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, SafeAreaView } from 'react-native';
import LoginInput from '../components/login/LoginInput';
import color from '../styles/colors';


export default function LoginScreen({ navigation }) {
    navigation.reset

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')}
                    style={styles.image} />
            </View>
            <LoginInput keyboardType='email-address' placeholder='Correo' image='user' />
            <LoginInput keyboardType={null} placeholder='Contraseña' image='lock'
                bolGone={true} secureTextEntry={hidePassword} onPress={() => setHidePassword(!hidePassword)} />
            <View style={styles.btnMain}>
                <TouchableOpacity onPress={() => goToPrincipal(navigation)}>
                    <Text style={styles.btntxt}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const goToPrincipal = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Principal' }],
    });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: color.BLUE,
        borderRadius: 10
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
    },

    image: {
        height: 100,
        width: 250,
        resizeMode: 'contain',
    }
});