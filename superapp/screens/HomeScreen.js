import React, { useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity,
  Animated, ImageBackground
} from 'react-native';

import { styles } from '../styles/HomeStyles';
import { components } from '../styles/components';

const HomeScreen = ({ navigation }) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/fondo.png')}
      style={{ flex: 1 }}
    >
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          opacity: fadeAnim,
          transform: [{ translateY }],
        }}
      >

        <View style={components.card}>
          <Text style={styles.emoji}>🏠</Text>
          <Text style={styles.title}>Inicio</Text>
          <Text style={styles.subtitle}>¿A dónde querés ir?</Text>

          <TouchableOpacity
            style={components.buttonPrimary}
            onPress={() => navigation.navigate('Details')}
          >
            <Text style={components.buttonText}>Ver detalles</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
    </ImageBackground>
  );
};

export default HomeScreen;