import React, { useState } from 'react';
import { View, TextInput,Text, Button ,AsyncStorage} from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {

    axios.post('http://127.0.0.1:8000/api/login', {
      username: username,
      password: password
    })
  .then(resposta => {
      navigation.navigate('Index'); 
  
  })
  .catch(erro => {
    setErrorMessage(erro.response.data.error)
  });

  };
  return (
    <View>
      <TextInput
        placeholder="Nome de usuário"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
    </View>
  );
};

export default LoginScreen;