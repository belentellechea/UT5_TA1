import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0); 

  function increaseCount () {
    setCount (count + 1); 
  }

  function decreaseCount () {
    setCount (count - 1); 
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>TA1</Text>
        <View style={styles.secondContainer}>
          <Pressable style={styles.button} onPress={decreaseCount}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.count}>Count: {count} </Text>
          <Pressable style={styles.button} onPress={increaseCount}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5D9',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button: {
    backgroundColor: '#FEC89A',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    margin: 40,
    width: 80, 
    height: 80
  },
  text: {
    fontSize: 50,
    alignSelf: 'center',
    fontFamily: 'Times New Roman'
  }, 
  secondContainer: {
    flex: 2,
    alignItems: 'center',
    flexDirection:'row'
  }, 
  count: {
    fontSize: 30,
    fontFamily: 'Times New Roman'
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
