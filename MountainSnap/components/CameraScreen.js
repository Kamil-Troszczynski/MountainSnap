import { useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//  PROPERTIES
const styles = StyleSheet.create({
    camera: {
        height: '100%',
        width: '100%',
    },
    text: {
        color: '#ffff',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 17
    },
    button: {
        padding: 10,
        backgroundColor: '#87CEEB',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 22
    },
    buttonText: {
        color: '#fff',
        fontSize: 17
    }
    });

//  CAMERA SCREEN
export default function CameraScreen()
{
    const [facing, _] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission)
    {
    return <SafeAreaView/>
    }

    if (!permission.granted)
    {
    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <TouchableOpacity onPress={requestPermission} style={styles.button} title="grant permission">
                <Text style={styles.buttonText}>Enable Camera Access</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </SafeAreaProvider>
    )
    }

    return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
        <CameraView style={styles.camera} facing={facing}>
        </CameraView>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
