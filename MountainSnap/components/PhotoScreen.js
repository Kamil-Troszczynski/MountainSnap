import React, { useState, useRef, useEffect } from 'react';
import Camera from 'expo-camera';
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
        flex: 1
    },
    controls: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        marginBottom: 20,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 15,
    },
    button: {
        flex: 0.3,
        alignSelf: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
        borderRadius: 10,
    },
    });

//  PHOTO SCREEN
export default function PhotoScreen()
{
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
    (async () => {
        const { status } = await camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
    })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            console.log("Took a photo", photo.uri);
        }
        };

    if (hasPermission === null) {
        return <SafeAreaView />;
        }
        if (hasPermission === false) {
            return <Text> No access for camera </Text>;
        }

    return (
        <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                <Camera style={styles.camera} ref={setCamera}>
                    <SafeAreaView style={styles.controls}>
                        <TouchableOpacity style={styles.button} onPress={takePicture}>
                            <Text style={styles.text}> Take a photo </Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </Camera>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
