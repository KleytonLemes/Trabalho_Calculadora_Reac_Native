import { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = (operacao) => {
    const valorANumber = Number(valorA);
    const valorBNumber = Number(valorB);

    switch (operacao) {
      case 'soma':
        setResultado(valorANumber + valorBNumber);
        break;
      case 'subtracao':
        setResultado(valorANumber - valorBNumber);
        break;
      case 'multiplicacao':
        setResultado(valorANumber * valorBNumber);
        break;
      case 'divisao':
        setResultado(valorANumber / valorBNumber);
        break;
    }
};

return (
  <LinearGradient style={estilos.container} colors={['#000000', '#1C1C1C' ,'#363636']}>

    <View style={estilos.contTitulo}>
      <Text style={estilos.titulo}> CALCULADORA </Text>
    </View>

    <View style={estilos.contInputsBt}>
      <View style={estilos.contInputs}>
        <TextInput
          style={estilos.inputValorA}
          placeholder="valor A"
          value={valorA}
          onChangeText={setValorA}
          placeholderTextColor="white" // Cor do texto do placeholder
        />
       
    

        <TextInput style={estilos.inputValorA}
          placeholder="valor B"
          value={valorB}
          onChangeText={setValorB}
          placeholderTextColor="white" // Cor do texto do placeholder
        />
      </View>

      <View style={estilos.contBt}>
        <View style={estilos.contBt1}>
          <Pressable style={estilos.botaoSomar} title="Somar" onPress={() => calcular('soma')}>
            <Text style={estilos.textoBotao}> SOMAR </Text>
          </Pressable>

          <Pressable style={estilos.botaoSubtrair} title="Subtrair" onPress={() => calcular('subtracao')}>
            <Text style={estilos.textoBotao}> SUBTRAIR </Text>
          </Pressable>
        </View>

       <View style={estilos.contBt1}>
          <Pressable style={estilos.botaoMultiplicar} title="Multiplicar" onPress={() => calcular('multiplicacao')}>
            <Text style={estilos.textoBotao}> MULTIPLICAR </Text>
          </Pressable>

          <Pressable  style={estilos.botaoDividir} title="Dividir" onPress={() => calcular('divisao')} >
            <Text style={estilos.textoBotao}> DIVIDIR </Text>
          </Pressable>
        </View>
      </View>

    </View>

    <View style={estilos.contresut}>
      <Text style={estilos.resut}>  {resultado}</Text>     
    </View>

  </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contTitulo: {
    marginTop: 60,
    padding: 30,
  },
  titulo: {
    color: 'white',
    fontSize: 50,
    
  },
  contInputsBt: {
    top: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contInputs: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    height: 300,
    borderRadius: 100,    
    top: 30,
  },
  inputValorA: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 2, // largura da borda
    borderColor: 'white', // cor da borda
    padding: 10,
    height: 100,
    width: 150,
  },
  contBt: {
    marginTop: -40,
    flexDirection: 'row',
    gap: 10,
    padding: 150,
  },
  contBt1: {
    gap: 30,
    padding:10,
  },
  botaoSomar: {
    backgroundColor: '#FFD700', // Cor de fundo do botão
    borderRadius: 5, // Raio do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    height: 150, // Altura do botão
    width: 150, // Largura do botão
    alignItems: 'center', // Alinhamento do texto ao centro horizontalmente
    justifyContent: 'center', // Alinhamento do texto ao centro verticalmente,
  },
  botaoSubtrair: {
    backgroundColor: '#0000FF', // Cor de fundo do botão
    borderRadius: 5, // Raio do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    height: 150, // Altura do botão
    width: 150, // Largura do botão
    alignItems: 'center', // Alinhamento do texto ao centro horizontalmente
    justifyContent: 'center', // Alinhamento do texto ao centro verticalmente,
  },
  botaoMultiplicar: {
    backgroundColor: '#FF0000', // Cor de fundo do botão
    borderRadius: 5, // Raio do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    height: 150, // Altura do botão
    width: 150, // Largura do botão
    alignItems: 'center', // Alinhamento do texto ao centro horizontalmente
    justifyContent: 'center', // Alinhamento do texto ao centro verticalmente,
  },
  botaoDividir: {
    backgroundColor: '#228B22', // Cor de fundo do botão
    borderRadius: 5, // Raio do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    height: 150, // Altura do botão
    width: 150, // Largura do botão
    alignItems: 'center', // Alinhamento do texto ao centro horizontalmente
    justifyContent: 'center', // Alinhamento do texto ao centro verticalmente,
  },

  textoBotao: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },




  contresut: {
    justifyContent: 'center',
    alignItems: 'center',    
    marginTop: -50,       


  },
  resut: {
    marginTop: -1,
    borderWidth: 2, // largura da borda
    borderColor: 'white', // cor da borda
    padding: 30, 
    color: 'white',
    fontSize: 40,
    backgroundColor: '#FFA500',
    height: 150,
    width: 350,
  },

});
