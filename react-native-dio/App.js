import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

const App = () => {

  const [numero, setNumero] = useState(0)

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 100)
    setNumero(novo_numero)
  }

  return (
    <>
      <SafeAreaView style={style.container}>
        <Text style={style.number}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.button}>
          <Text>Gerar número</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    width: '50%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  }
})

export default App