import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native'
import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { StackNavigation } from './src/navegador/StackNavigation';
// import { StackNavigation } from './src/navegador/StackNavigation';

export const App = () => {
  return (
     <NavigationContainer>
 <StackNavigation/>
</NavigationContainer>


     

  )
}
export default App;
