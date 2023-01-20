import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import Weight from './components/Weight';
import Height from './components/Height';
import CalcButton from './components/CalcButton';
import ResultCalc from './components/Result';
import Table from './components/Table';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [result, setResult] = useState(0)

  const calcImc = () => {
    if (weight == 0 || !weight) {
      alert('Informe o Peso')
      return;
    }
    if (height == 0 || !height) {
      alert('Informe a Altura');
      return;
    }
    const calcResult = weight/(Math.pow(height, 2));
    return setResult(+calcResult.toFixed(1))
  }

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Weight setWeight={setWeight }/>
      <Height setHeight={setHeight} />
      <CalcButton calcImc={calcImc}/>
      <ResultCalc result={result}/>
      <Table />
    </SafeAreaView>
  );
}

