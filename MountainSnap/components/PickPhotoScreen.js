import React, { useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//  PROPERTIES
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    image: {
      width: 200,
      height: 200,
    },
    button: {
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
        fontSize: 15,
    }
  });

//  PICK PHOTO SCREEN
export default function PickPhotoScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={pickImage} >
              <Text style = {styles.buttonText}>Pick an image from camera roll</Text>
          </TouchableOpacity>
          <Image source={{ uri: image }} style={styles.image}></Image>
          <TouchableOpacity style={styles.button}>
              <Text style = {styles.buttonText}>Analyze</Text>
          </TouchableOpacity>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}