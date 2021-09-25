import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native'
import { Container, Navbar } from 'navbar-native';

const planeIcon = { uri: "https://i.imgur.com/Ifaq8Ki.png"}



class ReactNativeProject extends Component {
    render() {
        return (
            <Text>Hola</Text>)
    }
}

const styles = StyleSheet.create({

    header: {

        width: "100%",
        height: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",

    },

    headerText: {

        fontWeight: "bold",
        fontSize: 24,
        color: "0093B2",
        letterSpacing: 1,

    },

    icon: {
        position: "absolute",
        left: 15
    }

})