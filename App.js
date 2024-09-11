import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

const diceImages = [
  require('./assets/dice1.png'), 
  require('./assets/dice2.png'), 
  require('./assets/dice3.png'),
  require('./assets/dice4.png'),
  require('./assets/dice5.png'),
  require('./assets/dice6.png')
];

export default function App() {
  const [diceFace, setDiceFace] = useState(0);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6); // Get random number between 0-5
    setDiceFace(randomNum);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <Image source={diceImages[diceFace]} style={styles.diceImage} />
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
