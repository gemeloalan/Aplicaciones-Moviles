import React from 'react'
import { Text, View, Button , StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
// import { styles } from "../styles/styles";
import { Styles } from "../styles/Styles";
// import { styles } from '../../estilo/appstyle';
import { UnoScreen } from './UnoScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props extends StackScreenProps <any  , any  > {};

export const InicioScreen = ({navigation}:Props) => {
   
  return (
    <View style={Styles.globalMargin}>
        <Text style={Styles.tittle}  >
      SCREEN    INICIO
           </Text>
           <TouchableOpacity
onPress={()=>navigation.navigate('UnoScreen')}
style={Styles.boton}
           >
            <Text style={Styles.botonjr}>IR A LA PAGINA UNO</Text>
           </TouchableOpacity>
      {/*      <Button 
    title='IR A LA PAGINA UNO'
onPress={()=>navigation.navigate('UnoScreen')}
    /> */}
    <Text>ALAN MANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 42</Text>


    </View>
  )
}
