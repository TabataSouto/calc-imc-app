import React from 'react';
import {View, Image} from 'react-native';
import Style from './Style';
import TableImage from '../../assets/tabela-imc.png';

export default function () {
  return (
    <View style={Style.block}>
      <Image style={Style.table} source={TableImage} />
    </View>
  );
}
