import React, {useState} from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'

export default function Novo({route, navigation}) {
    const [contatos, setContatos] = useState({key: Math.random().toString(), nome: "", telefone: ""});
    const salvarContato = () => {
        navigation.navigate('Lista', contatos);
     }
     
    return (
        <View style={styles.container}>
              <Button title="Salvar" onPress={salvarContato}/>
              <TextInput placeholder="Nome" style={styles.input} onChangeText={text => setContatos(text)}/>    
              <TextInput placeholder="Telefone" style={styles.input} onChangeText = {text => setContatos(text)}/>    
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    input: {
      borderBottomWidth: 1, 
      borderColor: '#c1c4cd', 
      paddingTop: 16 
    }
  });