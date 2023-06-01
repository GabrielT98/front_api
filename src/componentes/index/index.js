import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IndexScreen = ({ navigation }) => {

  navigation.setOptions({ headerShown: false });

  const handleCadastrarBarraginha = () => {
    navigation.navigate('Formulario'); 
  };

  const handleListarBarraginha = () => {
    navigation.navigate('ListarBarraginhas'); 
  };


  return (
    <View style={styles.container}>
       <View style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo ao app</Text>
      <Text style={styles.subtitle}>Minha Barraginha</Text>
    </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="home" size={24} color="white" />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCadastrarBarraginha} style={styles.footerItem}>
          <FontAwesome5 name="plus" size={24} color="white" />
          <Text style={styles.footerText}>Barrinha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleListarBarraginha} style={styles.footerItem}>
          <MaterialIcons name="list" size={24} color="white" />
          <Text style={styles.footerText}>Listar Barrinha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888888',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
    paddingHorizontal: 20,
  },

  footerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    color: 'white',
    marginTop: 5,
  },

});

export default IndexScreen;