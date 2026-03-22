import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';


import { db } from '../firebaseConfig';
import { styles } from '../styles/SolicitudAdopcionStyles';

const SolicitudAdopcionScreen = () => {
  const [mascotas, setMascotas] = useState([]);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // 🔥 Obtener mascotas
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'mascotas'),
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMascotas(data);
      }
    );

    return unsubscribe;
  }, []);

  // ✅ Enviar solicitud
  const enviarSolicitud = async () => {
    if (!mascotaSeleccionada || !nombre || !telefono || !mensaje) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      const mascota = mascotas.find(m => m.id === mascotaSeleccionada);

      await addDoc(collection(db, 'solicitudes'), {
        mascotaId: mascota.id,
        mascotaNombre: mascota.nombre,
        solicitanteNombre: nombre,
        solicitanteTelefono: telefono,
        solicitanteMensaje: mensaje,
        createdAt: serverTimestamp(),
      });

      Alert.alert('Éxito', 'Solicitud enviada correctamente');

      setMascotaSeleccionada(null);
      setNombre('');
      setTelefono('');
      setMensaje('');
    } catch (error) {
      Alert.alert('Error', 'No se pudo enviar la solicitud');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitud de adopción 🐾</Text>

      {/* 🐶 SELECTOR DE MASCOTA */}
<View style={styles.selector}>
  <Text style={styles.selectorTitle}>Selecciona una mascota</Text>

  {mascotas.map((mascota) => (
    <TouchableOpacity
      key={mascota.id}
      style={[
        styles.option,
        mascotaSeleccionada === mascota.id && styles.optionSelected,
      ]}
      onPress={() => setMascotaSeleccionada(mascota.id)}
    >
      <Text
        style={[
          styles.optionText,
          mascotaSeleccionada === mascota.id && styles.optionTextSelected,
        ]}
      >
        {mascota.nombre}
      </Text>
    </TouchableOpacity>
  ))}
</View>

      {/* 📋 FORMULARIO */}
      <TextInput
        placeholder="Tu nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Teléfono"
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Mensaje"
        style={[styles.input, styles.textArea]}
        value={mensaje}
        onChangeText={setMensaje}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={enviarSolicitud}
      >
        <Text style={styles.buttonText}>Enviar solicitud</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SolicitudAdopcionScreen;