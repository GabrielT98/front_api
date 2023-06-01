import React, { useState } from 'react';
import { View, TextInput, Text, Button , StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  navigation.setOptions({ headerShown: false });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    await axios.post('http://104.248.125.130:8080/api/login', {
      username: username,
      password: password
    })
    .then(resposta => {     
      AsyncStorage.setItem('token', resposta.data.token);
      AsyncStorage.setItem('userId', String(resposta.data.id));
      navigation.navigate('Index');
   })
    .catch(erro => {
      setErrorMessage(erro.response.data.error)
    });
  };

  const handleCadastrarUsuario = () => {
    navigation.navigate('CadastrarUsuario'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="user" size={64} color="#fff" />
        <Text style={styles.title}>Faça login</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Usuário:</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="#ccc" style={styles.inputIcon} />
          <TextInput 
            style={styles.input}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <Text style={styles.label}>Senha:</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={24} color="#ccc" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Button title="Login" onPress={handleLogin} />
        {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
        <TouchableOpacity onPress={handleCadastrarUsuario} style={styles.linkButton}>
          <Text style={styles.linkText}>Novo Usuário? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
  },
  form: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  linkButton: {
    alignItems: 'center',
    marginTop:10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
