import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import * as yup from 'yup'

const [password, setPassword] = useState('')
const [isPassGenerated, setIsPassGenerated] = useState(false)
const [lowerCase, setLowerCase] = useState(false)
const [upperCase, setUpperCase] = useState(false)
const [number, useNumbers] = useState(false)
const [symbol, useSymbols] = useState(false)


const genratePasswordString = (passwordLength: number) => {

}

const createPassword = (charaters: String, passwordLength: number) =>{

}

const PasswordSchema = yup.object().shape({
  passwordLength: yup.number()
  .min(4,'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Lenght is required')
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})