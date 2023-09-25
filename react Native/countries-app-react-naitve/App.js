import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import { ContextWrapper } from './context';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <ContextWrapper>
      <SafeAreaProvider style={{
        backgroundColor: "#f5f5f5",
        paddingTop: Platform.OS == "ios" ? 32 : 0
      }}>
        <Header /> 
          <NavigationContainer>
          <Stack.Navigator initialRouteName="main">
            <Stack.Screen name="main" component={Home}  options={{ headerShown: false }}/>
            <Stack.Screen name="singleCountry" component={SingleCountry}  options={{ headerShown: false }}/>
          </Stack.Navigator>
          </NavigationContainer>
        <StatusBar  style={"light"} hidden={false} />
      </SafeAreaProvider>
    </ContextWrapper>
  );
}

