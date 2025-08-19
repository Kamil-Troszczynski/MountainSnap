import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//  PATH TO STARTER ICON
const STARTER_FILE_PATH = '../assets/MS_starter.png'; 

//  PROPERTIES
const styles = StyleSheet.create({
    imageText: { 
      width: 375, 
      height: 228 
    },
    homeButton: {
      backgroundColor: '#87CEEB',
      padding: 15,
      borderRadius: 15,
      width: 200
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
    homeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    }
  });
  

//  START SCREEN
export default function StartScreen({ navigation })
{
  return (
    <SafeAreaProvider>  
      <SafeAreaView style={styles.homeContainer}>
        <Image
          source={require(STARTER_FILE_PATH)}
          style={styles.imageText}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Options')}
        >
            <Text style={styles.buttonText}>Start Recognition</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
