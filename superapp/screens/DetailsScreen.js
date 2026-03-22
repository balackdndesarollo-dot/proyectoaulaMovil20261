import React, { useEffect, useRef } from 'react';
import {
  View, Text,
  Animated, ImageBackground
} from 'react-native';

import { styles } from '../styles/DetailsStyles';
import { components } from '../styles/components';

const DetailsScreen = () => {

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
          <Text style={styles.emoji}>📋</Text>
          <Text style={styles.title}>Detalles</Text>
          <Text style={styles.subtitle}>
            Acá van los detalles de tu selección
          </Text>
        </View>

      </Animated.View>
    </ImageBackground>
  );
};

export default DetailsScreen;