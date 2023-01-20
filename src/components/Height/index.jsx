import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Style from './Style'

export default function({setHeight}) {
  return(
    <View style={Style.block}>
      <Text>Informe sua Altura:</Text>
      <TextInput
        style={Style.text}
        autoFocus={true}
        keyboardType='numeric'
        onChangeText={(text) => setHeight(text)}
      />
    </View>
  )
}