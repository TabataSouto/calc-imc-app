import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Style from './Style'

export default function({setWeight}) {
  return(
    <View style={Style.block}>
      <Text>Informe seu Peso:</Text>
      <TextInput
        style={Style.text}
        autoFocus={true}
        keyboardType='numeric'
        onChangeText={(text) => setWeight(text)}
      />
    </View>
  )
}