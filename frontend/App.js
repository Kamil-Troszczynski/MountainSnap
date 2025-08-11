import { StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const STARTER_FILE_PATH = './assets/MS_starter.png'; 


//  MAIN WINDOW -> NOW
const App = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={require(STARTER_FILE_PATH)}
          style={styles.imageText}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Start Recognition')}
        >
            <Text style={styles.buttonText}>Start Recognition</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
)


//  PROPERTIES
const styles = StyleSheet.create({
  imageText: { 
    width: 350, 
    height: 225 
  },
  button: {
    backgroundColor: '#196F3',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  card: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;