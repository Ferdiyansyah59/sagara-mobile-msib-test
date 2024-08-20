import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_URL } from '../config/config';
import ScreenDimensions from '../static/dimension';

const WIDTH = ScreenDimensions.width;
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size='large'
        color='#0000ff'
      />
    );
  }

  return (
    <View style={styles.container}>
      {weatherData && (
        <>
          <View style={styles.todayContainer}>
            <Text style={styles.title}>Cuaca Hari Ini</Text>
            <Text
              style={styles.caption}
            >{`Suhu: ${weatherData.list[0].main.temp}°C`}</Text>
            <Text
              style={styles.caption}
            >{`Cuaca: ${weatherData.list[0].weather[0].description}`}</Text>
          </View>
          <View style={[styles.todayContainer, { marginTop: 15 }]}>
            <Text style={[styles.title, { marginBottom: -7 }]}>
              Perkiraan Cuaca 3 Hari Kedepan
            </Text>
            {weatherData.list.slice(1).map((item, index) => (
              <View key={index}>
                <Text
                  style={[styles.caption, { marginTop: 15, fontWeight: '800' }]}
                >{`Hari ke-${index + 1}`}</Text>
                <Text
                  style={styles.caption}
                >{`Suhu: ${item.main.temp}°C`}</Text>
                <Text
                  style={styles.caption}
                >{`Cuaca: ${item.weather[0].description}`}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  caption: {
    color: '#FFFFFF',
  },
  todayContainer: {
    backgroundColor: '#257EE4',
    width: WIDTH * 0.8,
    padding: 10,
    borderRadius: 10,
  },
});

export default WeatherComponent;
