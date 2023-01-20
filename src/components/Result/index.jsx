import React from 'react';
import { View, Text } from 'react-native';
import Style from './Style';

export default function({result}) {
  return(
    <View style={Style.block}>
      <Text>Resultado: {result}</Text>
    </View>
  )
}