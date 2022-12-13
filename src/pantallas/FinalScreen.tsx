import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/Styles';


interface Props extends StackScreenProps <any  , any  > {};

export const FinalScreen = ({navigation}:Props) => {
   
  return (
    <View >
    <Text>
      SCREEN  FINAL       </Text>
    <Button
    title='IR LA PAGINA DE INICIO'
onPress={()=>navigation.navigate('InicioScreen')}
    />
     <Button
    title='REGRESAR '
onPress={()=>navigation.navigate('DosScreen')}
    />
    <Text>
      NAVEGANDO CON ARGUMENTOS
    </Text>
     


    <TouchableOpacity
    onPress={()=>navigation.navigate('Estudiante',{
    
    
  
      id : 1,
    nombre : 'estudiante'

    }) }
    >
<Text style={Styles.variable}
    >IR A LA PAGINA DE ESTUDIANTE</Text>
    </TouchableOpacity>
    <Text>ALAN MANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 42</Text>

    </View>
  )
}
