import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogScreen from "./screen/blog";
import WelcomeScreen from "./screen/welcome";
import SinglePostScreen from "./screen/post";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer 
    >
      <Stack.Navigator 
      initialRouteName="welcome"
      
      screenOptions={{
        headerShown: true,
        headerStyle:{
          backgroundColor: "white",
        }
      }}
      >
        <Stack.Screen name="blog" component={BlogScreen}/>
        <Stack.Screen name="welcome" component={WelcomeScreen}/>
        <Stack.Screen name="single-post" component={SinglePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

