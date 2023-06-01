import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/componentes/login/Login'
import IndexScreen from './src/componentes/index/index'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CadastrarUsuarioScreem from './src/componentes/cadastrar_usuario';
import ListaBarraginhasScreem from './src/componentes/listar_barraginha';
import FormularioBarraginhaScreem from './src/componentes/formulario/Formulario';
import BarraginhaScreem from './src/componentes/barraginha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuarioScreem} />
        <Stack.Screen name="ListarBarraginhas" component={ListaBarraginhasScreem} />
        <Stack.Screen name="Barraginha" component={BarraginhaScreem} />
        <Stack.Screen name="Formulario" component={FormularioBarraginhaScreem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}