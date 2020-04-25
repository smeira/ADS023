import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Lista from './screens/Lista';
import Novo from './screens/Novo';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista></Lista>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
