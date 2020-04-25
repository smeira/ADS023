import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TelaFlex from './screens/TelaFlex';
import TelaFlexDirection from './screens/TelaFlexDirection';

export default function App(TelaFlexDirection) {
  return (
    <View style={styles.container}>
       <Header><Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
