import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const BarraginhaScreem = ({ navigation ,route }) => {
    const { barraginha } = route.params;

  navigation.setOptions({ title: `Barraginha ${barraginha.name}` });
    
  return (

    <ScrollView>
    <View style={styles.container}>
        <View style={styles.card}>
        <View style={styles.notaContainer}>
          <Text style={styles.notaLabel}>Nota:</Text>
          <Text style={styles.notaValue}>{barraginha.note}</Text>
        </View>

        <View>
        <MapView loadingEnabled={true}
        region={
            {
                latitude: barraginha.latitude,
                longitude: barraginha.logitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,

            }
             
        }
        style={styles.map}
      >
        <Marker coordinate={
            {
                latitude: barraginha.latitude,
                longitude: barraginha.logitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,

            }
        }
        />
      </MapView>
        </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Pluviosidade Máxima Anual:</Text>
        <Text style={styles.value}>{barraginha.pluviosidade_max_anual.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Área da Microbacia de Contribuição:</Text>
        <Text style={styles.value}>{barraginha.area_microbracia_contribuicao.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Maior Cota da Microbacia:</Text>
        <Text style={styles.value}>{barraginha.maior_cota_microbacia.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Menor Cota da Microbacia:</Text>
        <Text style={styles.value}>{barraginha.menor_cota_microbacia.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Comprimento do Talvegue Principal:</Text>
        <Text style={styles.value}>{barraginha.comprimento_talvegue_principal.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Pluviosidade Máxima Anual (Hora):</Text>
        <Text style={styles.value}>{barraginha.pluviosidade_max_anual_hora.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Pluviosidade Máxima Anual (Segundo):</Text>
        <Text style={styles.value}>{barraginha.pluviosidade_max_anual_segundo.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Área da Microbacia de Contribuição (ha):</Text>
        <Text style={styles.value}>{barraginha.area_microbacia_contribuicao_ha.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Declividade do Trecho:</Text>
        <Text style={styles.value}>{barraginha.declividade_trecho.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Volume Concentrado do Trecho:</Text>
        <Text style={styles.value}>{barraginha.volume_concentrado_trecho.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Vazão de Escoamento Bruto:</Text>
        <Text style={styles.value}>{barraginha.vazao_escoamento_bruto.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Vazão de Escoamento:</Text>
        <Text style={styles.value}>{barraginha.vazao_escoamento.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Tempo de Concentração:</Text>
        <Text style={styles.value}>{barraginha.tempo_concentracao.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Tempo de Concentração Final:</Text>
        <Text style={styles.value}>{barraginha.tempo_concentracaoo_final.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Capacidade de Infiltração A:</Text>
        <Text style={styles.value}>{barraginha.capacidade_infiltracao_a.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Capacidade de Infiltração B:</Text>
        <Text style={styles.value}>{barraginha.capacidade_infiltracao_b.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Velocidade de Infiltração:</Text>
        <Text style={styles.value}>{barraginha.velocidadede_infiltracao.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Quantidade a Infiltrar Final:</Text>
        <Text style={styles.value}>{barraginha.quantidade_infiltrar_final.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Área Total de Infiltração:</Text>
        <Text style={styles.value}>{barraginha.area_total_infiltracao.toFixed(2)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Área de Fundo Considerada:</Text>
        <Text style={styles.value}>{barraginha.area_fundo_consider.toFixed(2)}</Text>
      </View>
      </View>
     
    </View>
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  notaValue: {
    textAlign: 'justify',
    marginBottom:2,
  },
  notaLabel:{
    fontWeight:'bold'

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  fieldContainerE: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
});

export default BarraginhaScreem;