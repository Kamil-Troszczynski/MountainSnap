import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//  PROPERTIES
const styles = StyleSheet.create({
    optionsButton: {
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
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }
});

//  OPTION SCREEN
export default function OptionScreen({ navigation }) 
{
    return (
    <SafeAreaProvider> 
        <SafeAreaView style={styles.optionsContainer}>
            <TouchableOpacity
                style={styles.optionsButton}
                onPress={() => navigation.navigate('Pick Photo Screen')}
            >
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionsButton}
                onPress={() => navigation.navigate('Photo Screen')}
            >
                <Text style={styles.buttonText}>Take a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.optionsButton}
                onPress={() => navigation.navigate('Camera Screen')}
            >
                <Text style={styles.buttonText}>Real - Time Camera</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
