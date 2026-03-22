import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

import { db } from '../firebaseConfig'; // 👈 AJUSTA ESTA RUTA

import { styles } from '../styles/MascotasStyles';

const MascotasScreen = () => {
  const [mascotas, setMascotas] = useState([]);

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [foto, setFoto] = useState('');

  // 🔥 Obtener mascotas en tiempo real
  useEffect(() => {
    const q = query(
      collection(db, 'mascotas'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMascotas(data);
    });

    return unsubscribe;
  }, []);

  // ✅ Guardar mascota
  const guardarMascota = async () => {
    if (!nombre || !edad || !ubicacion || !foto) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      await addDoc(collection(db, 'mascotas'), {
        nombre,
        edad,
        ubicacion,
        foto,
        createdAt: serverTimestamp(),
      });

      setNombre('');
      setEdad('');
      setUbicacion('');
      setFoto('');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar la mascota');
    }
  };

  return (
    <View style={styles.container}>
      
      {/* 📋 FORMULARIO */}
      <View style={styles.form}>
        <Text style={styles.title}>Agregar mascota 🐾</Text>

        <TextInput
          placeholder="Nombre"
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          placeholder="Edad (ej: 2 años)"
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
        />

        <TextInput
          placeholder="Ubicación"
          style={styles.input}
          value={ubicacion}
          onChangeText={setUbicacion}
        />

        <TextInput
          placeholder="URL de la foto"
          style={styles.input}
          value={foto}
          onChangeText={setFoto}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={guardarMascota}
        >
          <Text style={styles.buttonText}>Guardar mascota</Text>
        </TouchableOpacity>
      </View>

      {/* 🐶 LISTADO */}
      <FlatList
        data={mascotas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.text}>Edad: {item.edad}</Text>
              <Text style={styles.text}>📍 {item.ubicacion}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MascotasScreen;
