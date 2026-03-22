// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacionStack from './navegacion/NavegacionStack'; // Flujo

import AuthStack from './navegacion/AuthStack'; // Flujo de autenticación
import { ProveedorAuth, AuthContexto } from './contextos/AuthContexto';
const Rutas = () => {
 const { usuario } = useContext(AuthContexto);
 return usuario ? <NavegacionStack /> : <AuthStack />;
};
export default function App() {
 return (
 <ProveedorAuth>
 <NavigationContainer>
 <Rutas />
 </NavigationContainer>
 </ProveedorAuth>
 );
}
