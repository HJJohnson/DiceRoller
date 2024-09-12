import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const diceImages = [
  require('./assets/images/dice1.png'), 
  require('./assets/images/dice2.png'), 
  require('./assets/images/dice3.png'),
  require('./assets/images/dice4.png'),
  require('./assets/images/dice5.png'),
  require('./assets/images/dice6.png')
];

export default function App() {
  const [diceIndex, setDiceIndex] = useState(0);

   const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setDiceIndex(randomNumber);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <Image source={diceImages[diceIndex]} style={styles.diceImage} />
      </TouchableOpacity>
      <Text style={styles.instruction}>Tap the dice to roll!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 150,
    height: 150,
  },
  instruction: {
    marginTop: 20,
    fontSize: 18,
  },
});

