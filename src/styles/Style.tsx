import { StyleSheet } from "react-native";

const primaryColor = '#d31528';
const secondaryColor = '#2aa94f';
const tertiaryColor = '#ffffff';
const fourthColor = '#4e4d4d';
const buttonBorderRadius = 100;

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: fourthColor,
        alignItems: 'center', 
        justifyContent: 'center',        
    },
    logo: {
        width: '100%',
        height: '90%',
        marginTop: '-30%',
    },
    logoHome: {
        width: '100%',
        height: '20%',
        marginTop: '10%',
    },
    inputContainer: {
        width: '80%',
        marginTop: 10,
    },
    input: {
        backgroundColor: primaryColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: buttonBorderRadius,
        borderBottomColor: fourthColor,
        borderBottomWidth: 2,
        marginTop: '5%',
    },
    buttonContainer: {
        width: '100%',

    },
    button: {
        backgroundColor: primaryColor,
        width: '100%',
        padding: '19%',
        alignItems: 'center',
        marginTop: '-40%',
    },
    buttonRole: {
        backgroundColor: secondaryColor,
        width: '100%',
        padding: 5,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
    },
    buttonError: {
        backgroundColor: secondaryColor,
        width: '100%',
        padding: 15,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: primaryColor,
        marginTop: 5,
        borderColor: fourthColor,
        borderWidth: 2,
    },
    buttonRegister: {
        backgroundColor: secondaryColor,
        width: '100%',
        padding: '19%',
        alignItems: 'center',
    },
    buttonOutlineRole: {
        backgroundColor: secondaryColor,
        marginTop: 5,
        borderColor: secondaryColor,
        borderWidth: 2,
    },
    buttonText: {
        color: tertiaryColor,
        fontWeight: '700',
        fontSize: 20,
    },
    buttonOutlineText: {
        color: fourthColor,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonRegisterText: {
        color: tertiaryColor,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',

    },
    buttonOutlineTextRole: {
        color: primaryColor,
        fontWeight: '700',
        fontSize: 16,
    },
    spinnerTextStyle: {
        color: 'white',
    },
    spinContainer: {
        position: 'absolute',
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 100,
    },
    textHome: {
        fontSize: 60,
        marginTop: 40,
        color: secondaryColor,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 20,
        marginTop: '10%',
        color: secondaryColor,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    },


})