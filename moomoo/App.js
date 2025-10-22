
// Tuodaan tarvittavat kirjastot ja komponentit
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { createTables } from './src/services/database';

// Sovelluksen pääkomponentti
export default function App() {
   // useEffect suoritetaan, kun komponentti ladataan ensimmäisen kerran
   // Tässä kutsutaan createTables-funktiota, joka luo tietokantataulut
  useEffect(() => {
    createTables();
  }, []);

   // NavigationContainer mahdollistaa navigoinnin
   // AppNavigator määrittelee eri näytöt ja niiden väliset siirtymät
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
