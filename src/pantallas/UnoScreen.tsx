
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { InicioScreen } from './InicioScreen';
// import { InicioScreen } from './inicioScreen';
import { Styles } from '../styles/Styles';


export const UnoScreen = () => {
  const navigator = useNavigation();

   
  return (
    <View>
    <Text Styles={Styles.boton}>
      SCREEN UNO        </Text>
      <Button Styles={Styles.botonjr}
    title='IR A LA PAGINA 2'
onPress={()=>navigator.navigate('DosScreen')}
    />
     <Button
    title='IR A LA PAGINA DE INICIO'
onPress={()=>navigator.navigate(InicioScreen)}
    />
   <Text>ALAN MANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 42</Text>

    </View>
  )
}
