import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [resultText, setResultText] = useState('');

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 11); // Gera número aleatório de 0 a 10
    setRandomNumber(randomNum);

    if (userNumber === '') {
      setResultText('Por favor, digite um número de 0 a 10.');
    } else {
      const userNum = parseInt(userNumber);
      if (userNum === randomNum) {
        setResultText('Parabéns, você acertou!');
      } else {
        setResultText(`Que pena, o número correto era ${randomNum}.`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo do N° Aleatório</Text>
      <Image source={require('./assets/charada.jpg')} style={styles.image} />
      <Text style={styles.instructions}>Pense em um n° de 0 a 10</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder=""
        value={userNumber}
        onChangeText={(text) => setUserNumber(text)}
      />
      <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>Descobrir</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{resultText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    color: 'red',
    borderColor: 'red',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
