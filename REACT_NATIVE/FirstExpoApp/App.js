import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { Login } from './Login';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Dashboard } from './Dashboard';
import { useEffect } from 'react';
const stack = createNativeStackNavigator()
export default function App() {
  useEffect(() => {

    console.log('hi its  working')
  }, [])
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTitleStyle: {
          fontSize: 50
        },
        headerTintColor: "white"
      }}>
        <stack.Screen name='Home'
          options={{
            headerRight: () => <Button title='Right' />,
            headerLeft: () => <Button title='Left'></Button>

          }}
          component={Login} />
        <stack.Screen

          name='dashboard' component={Dashboard} />

      </stack.Navigator>
    </NavigationContainer>

  );
}
const Home = () => {
  return <View><Text> Home</Text></View>
}


