import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './components/StartScreen'
import OptionScreen from './components/OptionScreen'
import PhotoScreen from './components/PhotoScreen'
import CameraScreen from './components/CameraScreen'


const Stack = createNativeStackNavigator();


//  APPLICATION
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
          {animation: "slide_from_right"}
        }>
        <Stack.Screen name='Home' component={StartScreen} />
        <Stack.Screen name='Options' component={OptionScreen} />
        <Stack.Screen name='Photo Screen' component={PhotoScreen} />
        <Stack.Screen name='Camera Screen' component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;