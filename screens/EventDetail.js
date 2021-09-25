import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';


const image = {uri: "https://i.imgur.com/oezY9Wr_d.webp?maxwidth=760&fidelity=grand"};

const plane = {uri: "https://i.imgur.com/nQkY30Y.png"};

const EventDetail = ({ navigation, route }) => {
  return (
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="contain" style = {styles.image}>


        <ImageBackground source={plane} resizeMode = "center" style = {{width: 700, height: 400, position: "absolute", marginTop: 450, marginLeft: 300}}></ImageBackground>

        <Text style={{ color: '#0093B2', position: "absolute", fontSize: 20, paddingLeft: 1000, paddingTop: 450}}>Season Sales</Text>

        <Text style={{ color: '#0093B2', position: "absolute", fontSize: 36, paddingLeft: 1000, paddingTop: 480}}>6% Discount on China, Japan &{"\n"}South Korea</Text>

      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  image: {
    flex: 1
  },
});

export default EventDetail;
