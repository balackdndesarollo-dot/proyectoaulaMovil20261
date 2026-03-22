import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  Animated,
  ImageBackground
} from 'react-native';

const SplashScreen = ({ navigation }) => {

  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();

    setTimeout(() => {
      navigation.replace('Login'); // 👈 a donde entra tu app
    }, 2000);

  }, []);

  return (
    <ImageBackground
      source={require('../assets/fondo.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >

      <Animated.Image
        source={require('../assets/icono.png')}
        style={{
          width: 160,
          height: 160,
          opacity: opacity,
          transform: [{ scale }]
        }}
      />

    </ImageBackground>
  );
};

export default SplashScreen;