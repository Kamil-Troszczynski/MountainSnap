import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useCameraPermission, useCameraDevice, Camera } from 'react-native-vision-camera';


const STARTER_FILE_PATH = './assets/MS_starter.png'; 
const Stack = createNativeStackNavigator();


function HomeScreen({ navigation })
{
  return (
    <SafeAreaProvider>  
      <SafeAreaView style={styles.home_container}>
        <Image
          source={require(STARTER_FILE_PATH)}
          style={styles.imageText}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.home_button}
          onPress={() => navigation.navigate('Option')}
        >
            <Text style={styles.buttonText}>Start Recognition</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


function OptionScreen({ navigation }) 
{
  return (
    <SafeAreaProvider> 
      <SafeAreaView style={styles.options_container}>
        <TouchableOpacity
          style={styles.options_button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.options_button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Real - Time Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.options_button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


//  MAIN WINDOW -> NOW
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Option" component={OptionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)


//  PROPERTIES
const styles = StyleSheet.create({
  Text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageText: { 
    width: 375, 
    height: 228 
  },
  home_button: {
    backgroundColor: '#87CEEB',
    padding: 15,
    borderRadius: 15,
    width: 200
  },
  options_button: {
    backgroundColor: '#87CEEB',
    margin: 20,
    padding: 15,
    borderRadius: 15,
    width: 250
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  home_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  options_container: {
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