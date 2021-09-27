import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Mine = ({ params }) => {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
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

export default Mine;
