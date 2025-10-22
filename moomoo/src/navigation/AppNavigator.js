
// Tuodaan tarvittavat kirjastot ja komponentit
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';

// Luodaan navigointikomponentti
const Tab = createBottomTabNavigator();

// AppNavigator-komponentti määrittelee, mitä välilehtiä sovelluksessa on
export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workouts" component={WorkoutsScreen} />
    </Tab.Navigator>
  );
  // Ensimmäinen välilehti (tab): etusivu
  // Toinen välilehti: treenit
}
