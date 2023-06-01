import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as Location from 'expo-location';

const FormularioBarraginhaScreem = ({ navigation }) => {
    navigation.setOptions({ title: 'Cadastrar barraginha' });
    const [name, setName] = useState('');
    const [notas, setNotas] = useState('');
    const [latitudee, setLatitude] = useState('');
    const [longitudee, setLongitude] = useState('');
    const [pluviosidadeMaxAnualDia, setPluviosidadeMaxAnualDia] = useState(1.00);
    const [areaMicroBacia, setAreaMicroBacia] = useState(1.00);
    const [maiorCotaMicroBacia, setMaiorCotaMicroBacia] = useState(1.00);
    const [menorCotaMicroBacia, setMenorCotaMicroBacia] = useState(1.00);
    const [talvegue, setTalvegue] = useState(1.00);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const handlePress = async () => {
        const userId = await AsyncStorage.getItem('userId')
        await axios.post('http://104.248.125.130:8080/api/user/' + userId + '/barraginha', {
          name: name,
          nota: notas,
          latitude: latitudee,
          longitude: longitudee,
          pluviosidadeMaxAnualDia: pluviosidadeMaxAnualDia,
          areaMicroBacia: areaMicroBacia,
          maiorCotaMicroBacia: maiorCotaMicroBacia,
          menorCotaMicroBacia: menorCotaMicroBacia,
          talvegue: talvegue
    
        })
    
          .then(function (response) {
            setName('');
            setNotas('');
            setLatitude('');
            setLongitude('');
            setPluviosidadeMaxAnualDia(1.00);
            setAreaMicroBacia(1.00);
            setMaiorCotaMicroBacia(1.00);
            setMenorCotaMicroBacia(1.00);
            setTalvegue(1.00);
          })
          .catch(function (error) {
            console.log(error);
          });
          getCoordenadas();
    
      };
      useEffect(() => {
        async function getCoordenadas() {
          try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permissão de localização negada!');
              return;
            }
    
            const location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
          } catch (error) {
            // Trate qualquer erro de forma adequada
          }
        }
    
        getCoordenadas();
      }, []);
    
        return (
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Notas:</Text>
                <TextInput
                  style={styles.input}
                  value={notas}
                  onChangeText={setNotas}
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Latitude:</Text>
                <TextInput
                  style={styles.input}
                  value={latitudee.toString()}
                  onChangeText={setLatitude}
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Logitude:</Text>
                <TextInput
                  style={styles.input}
                  value={longitudee.toString()}
                  onChangeText={setLongitude}
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Pluviosidade Máxima Anual Dia (mm):</Text>
                <TextInput
                  style={styles.input}
                  value={pluviosidadeMaxAnualDia.toString()}
                  onChangeText={setPluviosidadeMaxAnualDia}
                  keyboardType="numeric"
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Área da microbacia (m²):</Text>
                <TextInput
                  style={styles.input}
                  value={areaMicroBacia.toString()}
                  onChangeText={setAreaMicroBacia}
                  keyboardType="numeric"
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Maior cota da microbacia (m):</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Maior cota da microbacia (m)"
                  value={maiorCotaMicroBacia.toString()}
                  onChangeText={setMaiorCotaMicroBacia}
                  keyboardType="numeric"
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Menor cota da microbacia (m):</Text>
                <TextInput
                  style={styles.input}
                  value={menorCotaMicroBacia.toString()}
                  onChangeText={setMenorCotaMicroBacia}
                  keyboardType="numeric"
                  required={true}
                />
              </View>
        
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Comprimento do talvegue principal (km):</Text>
                <TextInput
                  style={styles.input}
                  value={talvegue.toString()}
                  onChangeText={setTalvegue}
                  keyboardType="numeric"
                  required={true}
                />
              </View>
        
              <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </ScrollView>
          );

}
         
const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    padding: 20,
    },
    title: {
    fontSize: 24,
    alignItems:'center',
    fontWeight: 'bold',
    marginBottom: 20,
    },
    inputContainer: {
    marginBottom: 15,
    },
    label: {
    fontSize: 16,
    marginBottom: 5,
    },
    input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    },
    button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    },
    buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    },
});
export default FormularioBarraginhaScreem;