
import React, { useState } from 'react';
import { View,TextInput,Text, TouchableOpacity } from 'react-native';

const IndexScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0.00);
  const [longitude, setLogitude] = useState(0.00);
  const [pluviosidadeMaxAnualDia, setPluviosidadeMaxAnualDia] = useState(0.00);
  const [areaMicroBacia, setAreaMicroBacia] = useState(0.00);
  const [maiorCotaMicroBacia, setMaiorCotaMicroBacia] = useState(0.00);
  const [menorCotaMicroBacia, setMenorCotaMicroBacia] = useState(0.00);
  const [talvegue, setTalvegue] = useState(0.00);

  const handlePress = () => {
    
  };
  return (
    <View>
      <Text>Bem Vindo ao aplicativo Minha Barraginha</Text>
      <Text>Cadastrar Barraginha</Text>
      <View>
        <Text>Nome:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text>Latitude:</Text>
        <TextInput
          value={latitude.toString()}
          onChangeText={setLatitude}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Logitude</Text>
        <TextInput
        value={longitude.toString()}
        onChangeText={setLogitude}
        keyboardType="numeric"
      />
      </View>
      <View>
        <Text>Pluviosidade Máxima Anual Dia (mm)</Text>
        <TextInput
        value={pluviosidadeMaxAnualDia.toString()}
        onChangeText={setPluviosidadeMaxAnualDia}
        keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Área da microbacia (m²)</Text>
        <TextInput
        value={areaMicroBacia.toString()}
        onChangeText={setAreaMicroBacia}
        keyboardType="numeric"
      />
      </View>
      <View>
        <Text>Maior cota da microbacia (m)</Text>
        <TextInput
          placeholder="Maior cota da microbacia (m)"
          value={maiorCotaMicroBacia.toString()}
          onChangeText={setMaiorCotaMicroBacia}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Menor cota da microbacia (m)</Text>
        <TextInput
        value={menorCotaMicroBacia.toString()}
        onChangeText={setMenorCotaMicroBacia}
        keyboardType="numeric"
      />
      </View>
      <View>
        <Text>Comprimento do talvegue principal (km)</Text>
        <TextInput
          value={talvegue.toString()}
          onChangeText={setTalvegue}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;