import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListaBarraginhasScreem = () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Minhas Barraginhas' });
  const [barraginhas, setBarraginhas] = useState([]);

  useEffect(() => {
    const fetchBarraginhas = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        const response = await axios.get('http://104.248.125.130:8080/api/user/' + userId + '/barraginha');
        setBarraginhas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBarraginhas();
  }, []);

  const handleVerMais = (barraginha) => {
    navigation.navigate('Barraginha', { barraginha });
  };

  return (
    <View style={styles.container}>
      {barraginhas.length > 0 ? (
        <ScrollView>
          {barraginhas.map((barraginha) => (
            <TouchableOpacity key={barraginha.id} style={styles.card} onPress={() => handleVerMais(barraginha)}>
              <Text style={styles.labelb}>Nome: {barraginha.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text>Nenhuma barraginha encontrada.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop:10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  labelb: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ListaBarraginhasScreem;