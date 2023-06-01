import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

const CadastrarUsuarioScreen = ({ navigation }) => {
  navigation.setOptions({ title: 'Criar Novo Usuário' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cre, setCre] = useState('');

  const handleCadastrar = async () => {
    if (!username || !password || !confirmPassword || !cre) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'A senha e a confirmação de senha não são iguais.');
      return;
    }

    try {
      const response = await axios.post(
        'http://104.248.125.130:8080/api/user/create',
        {
          username: username,
          password: password,
          cre: cre
        }
      );

      Alert.alert('Cadastro realizado com sucesso!');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);

    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <AntDesign name="user" size={64} color="#fff" />
        <Text style={styles.title}>Cadastrar Usuário</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Usuário:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>

        <Text style={styles.label}>Senha:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
         </View>

         <Text style={styles.label}>Confirmar Senha:</Text>
         <View style={styles.inputContainer}> 
            <TextInput
              style={styles.input}
              placeholder="Confirmação de senha"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>

         <Text style={styles.label}>CRE:</Text>
         <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Número CRE"
              value={cre}
              onChangeText={text => setCre(text)}
            />
        </View>

        <Button title="Cadastrar" onPress={handleCadastrar} />
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
    marginTop: 2,
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
  }
});

export default CadastrarUsuarioScreen;