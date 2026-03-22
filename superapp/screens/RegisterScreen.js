import React, { useState, useEffect, useRef } from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,ScrollView,Animated,ImageBackground,Image} from 'react-native';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { styles } from '../styles/RegisterStyles';
import { components } from '../styles/components';

export default function RegisterScreen({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userFocused, setUserFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

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


  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };


  const handleSignUp = async () => {
    if (!usuario || !email || !password) {
      Alert.alert('Error', 'Completá todos los campos');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: usuario,
      });

      await setDoc(doc(db, 'usuarios', user.uid), {
        uid: user.uid,
        usuario: usuario,
        email: email,
        createdAt: new Date(),
      });

      Alert.alert('✅ Registro exitoso', 'Usuario creado correctamente 🐾');
      navigation.navigate('Login');

    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/fondo.png')}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>

          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('../assets/icono.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Crear cuenta</Text>
            <Text style={styles.subtitle}>Registrate</Text>
          </View>

          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY }],
            }}
          >
            <View style={styles.form}>

              {/* Usuario */}
              <Text style={styles.label}>Usuario</Text>
              <TextInput
                placeholder="Tu nombre"
                value={usuario}
                onChangeText={setUsuario}
                onFocus={() => setUserFocused(true)}
                onBlur={() => setUserFocused(false)}
                style={[
                  components.input,
                  userFocused && components.inputFocused,
                ]}
              />

              {/* Email */}
              <Text style={styles.label}>Correo</Text>
              <TextInput
                placeholder="tu@correo.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                style={[
                  components.input,
                  emailFocused && components.inputFocused,
                ]}
              />

              {/* Password */}
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                placeholder="••••••••"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPassFocused(true)}
                onBlur={() => setPassFocused(false)}
                style={[
                  components.input,
                  passFocused && components.inputFocused,
                ]}
              />

              { /* Botón Registrar */}
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity
                  style={components.buttonPrimary}
                  onPress={handleSignUp}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                >
                  <Text style={components.buttonText}>Registrarse</Text>
                </TouchableOpacity>
              </Animated.View>

              {/* Link */}
              <TouchableOpacity
                style={components.buttonSecondary}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={components.buttonSecondaryText}>
                  ¿Ya tenés cuenta? Iniciá sesión
                </Text>
              </TouchableOpacity>

            </View>
          </Animated.View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}