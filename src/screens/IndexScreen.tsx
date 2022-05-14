import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "../styles/Style";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const IndexScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handlerSignUp = () => {
        navigation.replace('SignUp');
    }

    const handlerSingIn = () => {
        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.image}>
            <View style={styles.logo}>
                <Image
                    source={require('../assets/joystick.png')}  
                    resizeMode="contain"   
                    style={styles.logo}
                />
            </View>

            <View style={styles.buttonContainer} >
                <TouchableOpacity
                    onPress={handlerSingIn}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlerSignUp}
                    style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterText}>¡Vamos a registrarnos!</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>

    );
}

export default IndexScreen
