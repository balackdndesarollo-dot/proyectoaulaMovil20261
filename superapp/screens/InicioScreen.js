import React, { useContext, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  ImageBackground,
  PanResponder,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AuthContexto } from '../contextos/AuthContexto';
import { styles } from '../styles/InicioStyles';
import { components } from '../styles/components';

const SEGMENTS = 15;

const InicioScreen = () => {
  const { usuario } = useContext(AuthContexto);
  const navigation = useNavigation();

  // Posiciones del dragón
  const points = useRef(
    Array.from({ length: SEGMENTS }, () =>
      new Animated.ValueXY({ x: 120, y: 120 })
    )
  ).current;

  // Gestos
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        Animated.spring(points[0], {
          toValue: { x: gesture.moveX - 40, y: gesture.moveY - 250 },
          useNativeDriver: false,
        }).start();

        for (let i = 1; i < SEGMENTS; i++) {
          Animated.spring(points[i], {
            toValue: {
              x: points[i - 1].x._value,
              y: points[i - 1].y._value,
            },
            speed: 20,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <ImageBackground
      source={require('../assets/fondo.png')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View style={components.card}>
          {usuario && (
            <>
              <Text style={styles.emoji}>🐾</Text>
              <Text style={styles.welcome}>Bienvenid@</Text>
              <Text style={styles.title}>{usuario.nombre}</Text>
              <Text style={styles.Text}>
                Gracias por ayudar a cambiar la vida de una mascota.
              </Text>

              {/* ✅ BOTÓN */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Mascotas')}
                style={{
                  marginTop: 20,
                  backgroundColor: '#ff7a00',
                  paddingVertical: 14,
                  borderRadius: 14,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}
                >
                  Ver mascotas en adopción 🐶🐱
                </Text>
              </TouchableOpacity>
<TouchableOpacity
  onPress={() => navigation.navigate('SolicitudAdopcion')}
  style={{
    marginTop: 12,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  }}
>
  <Text
    style={{
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    }}
  >
    Enviar solicitud de adopción 📝🐾
  </Text>
</TouchableOpacity>
              {/* 🐉 DRAGÓN */}
              <View
                {...panResponder.panHandlers}
                style={{
                  marginTop: 24,
                  height: 240,
                  backgroundColor: '#111',
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                {points.map((point, index) => (
                  <Animated.View
                    key={index}
                    style={{
                      position: 'absolute',
                      width: index === 0 ? 16 : 10,
                      height: index === 0 ? 16 : 10,
                      borderRadius: 50,
                      backgroundColor: index === 0 ? '#ff7a00' : '#fff',
                      transform: point.getTranslateTransform(),
                    }}
                  />
                ))}
              </View>
            </>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default InicioScreen;