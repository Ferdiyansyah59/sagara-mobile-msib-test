import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import WeatherComponent from './components/WeatherComponent';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>FY Weather</Text>
      <WeatherComponent />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 100,
    paddingHorizontal: 50,
    fontWeight: '700',
    color: '#180C32',
  },
});
