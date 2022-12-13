import React from 'react'
import { Text, View, Button } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { Styles } from '../styles/Styles';
// import { styles } from '../../estilo/appstyle';

interface Props extends StackScreenProps <any  , any  > {};

export const DosScreen = ({navigation}:Props) => {
   
  return (
    <View >
    <Text >
SCREEN DOS        </Text>
    <Button 
    title='IR A LA PAGINA 1'
onPress={()=>navigation.navigate('UnoScreen')}
   style={Styles.boton}
    />
     <Button
    title='IR A LA PAGINA FINAL'
onPress={()=>navigation.navigate('FinalScreen')}
    />
   <Text>ALAN MANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 42</Text>

    </View>
  )
}
