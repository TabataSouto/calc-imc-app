import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Style from './Style';

export default function({calcImc}) {
  return(
    <View style={Style.block}>
      <TouchableHighlight
        style={Style.button}
        onPress={() => calcImc()}
      >
        <Text style={Style.text}>Calcular IMC</Text>
      </TouchableHighlight>
    </View>
  )
}