import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import {StyleSheet,Text,View,ActivityIndicator,StatusBar,Image,Button,TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Featured, EventDetail, Mine } from './screens';
import { customFonts } from './constants/'
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function App() {
  const [assetsLoaded, setAssetLoaded] = useState(false);

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar barStyle="default"></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#0093B2',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigate('EventDetail')}>
              <Image style={{width: 28, height: 28, marginTop: 30, marginLeft: 30}} source={require("./assets/images/PLANEICON.png")}/>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{color: '#0093B2', fontSize: 25, marginTop: 30, marginLeft: 20}}>Ikoflights</Text>
          ),
          headerRight: () => (
            <View style={{ flexDirection:"row" }}>
              <AppButton title= "Booking Managment" size="sm" backgroundColor='transparent' /> 
              <AppButton title="Information and services" size="sm" backgroundColor='transparent' /> 
              <AppButton title="Air Miles" size="sm" backgroundColor='transparent' />
              <Icon name='menu' size={30} style={{ marginTop: 34, marginRight: 30 }} color='#0093B2' />
            </View>
          )
        }}
        initialRouteName="EventDetail"
      >
        <Stack.Screen name="EventDetail" component={EventDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small"></ActivityIndicator>
  );
}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={{ marginTop: 30, marginRight: 30, width: 140 }}>
    <Text style={{color: '#0093B2', fontSize: 24}}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
