/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginView,
  RegisterView,
  LibraryView,
  RecipesView,
  RecipeView,
  AddRecipe,
  SettingsView,
} from './src';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={RegisterView} />
        <Stack.Screen name="Library" component={LibraryView} />
        <Stack.Screen name="Recipes" component={RecipesView} />
        <Stack.Screen name="Recipe" component={RecipeView} />
        <Stack.Screen name="Add Recipe" component={AddRecipe} />
        <Stack.Screen name="Settings" component={SettingsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
