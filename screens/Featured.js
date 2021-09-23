import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Featured = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Text style={{ color: '#fff', fontSize: 30 }}>Featured</Text>

      <Button

        onPress={() => {

          navigation.navigate('EventDetail');

        }}

        title="Go to Event Detail"

      />

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

    justifyContent: 'center',

    alignItems: 'center',

  },
  
});

export default Featured;
