import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function ResultIMC(props) {
  return (
    <View style={styles.resultIMC}>
      <Text style={styles.information} >{props.menssageResultIMC}</Text>
      <Text style={styles.numberIMC} >{props.resultIMC}</Text>
    </View>
  )
}