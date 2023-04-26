import React, { useState, useEffect } from 'react';
import { View,TextInput,Text, TouchableOpacity, FlatList ,StyleSheet,localAStorage} from 'react-native';

import axios from 'axios';
const IndexScreen = ({ navigation }) => {
  navigation.setOptions({ headerShown: false });

  const [name, setName] = useState('');
  const [notas, setNotas] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLogitude] = useState(null);
  const [pluviosidadeMaxAnualDia, setPluviosidadeMaxAnualDia] = useState(1.00);
  const [areaMicroBacia, setAreaMicroBacia] = useState(1.00);
  const [maiorCotaMicroBacia, setMaiorCotaMicroBacia] = useState(1.00);
  const [menorCotaMicroBacia, setMenorCotaMicroBacia] = useState(1.00);
  const [talvegue, setTalvegue] = useState(0.00);
  const [barraginhas, setBarraginhas] = useState([]);

  useEffect( async () => {
      await axios.get('http://104.248.125.130:8080/api/user/'+ userId +'/barraginha')
      .then(response => {
        setBarraginhas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect( async () => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLogitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  const userId = localStorage.getItem('userId');
  const handlePress = async () => {
    
    await axios.post('http://104.248.125.130:8080/api/user/'+ userId +'/barraginha', {
      name: name,
      nota:notas,
      latitude: latitude,
      longitude: longitude,
      pluviosidadeMaxAnualDia: pluviosidadeMaxAnualDia,
      areaMicroBacia: areaMicroBacia,
      maiorCotaMicroBacia: maiorCotaMicroBacia,
      menorCotaMicroBacia: menorCotaMicroBacia,
      talvegue: talvegue
      
    })
    .then(function (response) {
      setName('');
      setNotas('');
      setLatitude(0.00);
      setLogitude(0.00);
      setPluviosidadeMaxAnualDia(0.00);
      setAreaMicroBacia(0.00);
      setMaiorCotaMicroBacia(0.00);
      setMenorCotaMicroBacia(0.00);
      setTalvegue(0.00);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao Minha Barraginha</Text>
      <View> 
        <Text>Cadastrar Barraginha</Text>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            required={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label} >Notas:</Text>
          <TextInput
            style={styles.input}
            value={notas}
            onChangeText={setNotas}
            required={true}
            
          />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Latitude:</Text>
          <TextInput
            style={styles.input}
            value={latitude}
            onChangeText={setLatitude}
            keyboardType="numeric"
            required={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Logitude</Text>
          <TextInput
            style={styles.input}
            value={longitude}
            onChangeText={setLogitude}
            keyboardType="numeric"
            required={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Pluviosidade Máxima Anual Dia (mm)</Text>
          <TextInput
            style={styles.input}
            value={pluviosidadeMaxAnualDia.toString()}
            onChangeText={setPluviosidadeMaxAnualDia}
            keyboardType="numeric"
            required={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Área da microbacia (m²)</Text>
          <TextInput
            style={styles.input}
            value={areaMicroBacia.toString()}
            onChangeText={setAreaMicroBacia}
            keyboardType="numeric"
            required={true}
        />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Maior cota da microbacia (m)</Text>
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
          <Text  style={styles.label}>Menor cota da microbacia (m)</Text>
          <TextInput
            style={styles.input}
            value={menorCotaMicroBacia.toString()}
            onChangeText={setMenorCotaMicroBacia}
            keyboardType="numeric"
            required={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text  style={styles.label}>Comprimento do talvegue principal (km)</Text>
          <TextInput
            style={styles.input}
            value={talvegue.toString()}
            onChangeText={setTalvegue}
            keyboardType="numeric"
            required={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text  style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>Minhas Barraginhas:</Text>
        {barraginhas.map(barraginha => (
        <View key={barraginha.id} style={styles.card}>
          <Text style={styles.labelb}>Nome: {barraginha.name}</Text>

         
          <Text style={styles.labelb}>Pluviosidade máx anual(por hora): {barraginha.pluviosidade_max_anual} </Text>
          <Text style={styles.labelb}>Pluviosidade máx anual (por seg): {barraginha.pluviosidade_max_anual_segundo}  </Text>
          <Text style={styles.labelb}>Área da microbacia de contribuição: {barraginha.area_microbacia_contribuicao_ha}  </Text>
          <Text style={styles.labelb}>Declividade no trecho (m): {barraginha.declividade_trecho} </Text>
          <Text style={styles.labelb}>Volume concentrado no trecho: {barraginha.volume_concentrado_trecho}  </Text>
          <Text style={styles.labelb}>Vazão de escoamento bruto: {barraginha.vazao_escoamento_bruto}  </Text>
          <Text style={styles.labelb}>Vazão de escoamento (Método Racional): {barraginha.vazao_escoamento}  </Text>
          <Text style={styles.labelb}>Tempo de concentração - termo 1: {barraginha.tempo_concentracao}  </Text>
          <Text style={styles.labelb}>Tempo de concentração final - Tc: {barraginha.tempo_concentracaoo_final} </Text>
          <Text style={styles.labelb}>Capacidade de infiltração - A: {barraginha.capacidade_infiltracao_a}  </Text>
          <Text style={styles.labelb}>Capacidade de infiltração - B: {barraginha.capacidade_infiltracao_b} </Text>
          <Text style={styles.labelb}>Velocidadede Infiltração: {barraginha.velocidadede_infiltracao}  </Text>
          <Text style={styles.labelb}>Quantidade a infiltrar no t final - A: {barraginha.quantidade_infiltrar_final} </Text>
          <Text style={styles.labelb}>Área total necessária p infiltração: {barraginha.area_total_infiltracao} </Text>
          <Text style={styles.labelb}>Área de fundo considerando prof 3m: {barraginha.area_fundo_consider} </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  value: {
    marginTop: 5,
  },
  labelb: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 10
  },
  label: {
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '100%'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10
  },
  listItemText: {
    fontSize: 16,
    marginBottom: 5
  }
});

export default IndexScreen;