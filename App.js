


 import React from 'react'; 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from "@react-navigation/stack";
 import Home from './src/pages/home';
 import MovieList from "./src/pages/movieList"
 const Stack = createStackNavigator();
 
  function App() {
   return (
     <NavigationContainer>
        <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="MovieList" component={MovieList} />

       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;

