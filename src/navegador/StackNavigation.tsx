import { createStackNavigator } from '@react-navigation/stack';
import { useInsertionEffect } from 'react';
import { InicioScreen } from '../pantallas/InicioScreen';
import {  UnoScreen } from '../pantallas/UnoScreen';
import { DosScreen } from '../pantallas/DosScreen';
import { FinalScreen } from '../pantallas/FinalScreen';
import { Estudiante } from '../pantallas/Estudiante';


const Stack = createStackNavigator();

export const StackNavigation = ()=> {


  return (
    <Stack.Navigator>
      <Stack.Screen name="InicioScreen" component={InicioScreen} />
      <Stack.Screen name="UnoScreen" component={UnoScreen} />
      <Stack.Screen name="DosScreen" component={DosScreen} />
      <Stack.Screen name="FinalScreen" component={FinalScreen} />
      <Stack.Screen name='Estudiante' component={Estudiante}/>
    </Stack.Navigator>
  );
}
