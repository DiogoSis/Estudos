import React, { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ResultIMC from '../ResultIMC'
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [menssageIMC, setMessageIMC] = useState("preencha o valor da altura");
  const [IMC, setIMC] = useState(null)
  const [textButtom, setTextButon] = useState('Calcular')

  function IMCCalculator(){
    return setIMC((weight/(height*height)).toFixed(2))
  }

  function validationIMC(){
    if(weight != null && height != null){
      IMCCalculator()
      setHeight (null)
      setWeight (null)
      setMessageIMC("Seu IMC é:")
      setTextButon("Calcular novamente!")
      return
    }
    setIMC(null)
    setTextButon("Calcular")
    setMessageIMC("Preencha o peso e a altura")
  }

  return (
    <View style={styles.formContext} >
      <View style={styles.form} >
        <Text style={styles.formLabel} >Altura</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder='Ex. 1.75'
          keyboardType='numeric'
        ></TextInput>

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder='Ex. 75'
          keyboardType='numeric'
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {validationIMC() }}
        >
          <Text style={styles.textButtonCalculator} >{textButtom}</Text>
        </TouchableOpacity>
        
      </View>
      <ResultIMC menssageResultIMC={menssageIMC} resultIMC={IMC} />
    </View>
  )
}
