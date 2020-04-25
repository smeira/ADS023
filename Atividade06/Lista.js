import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { Navigation } from '@react-navigation/native';

export default function Lista({ route, navigation }) {
    const [contatos, setContatos] = useState([]);
    const novoContato = () => {
        navigation.navigate('Novo');
    }

    const exibirItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.telefone}>{item.telefone}</Text>
            </View>
        );
    }
    
    return (
        <View style={styles.container}>
            <Button title="Novo contato" onPress={novoContato} />
            <FlatList style={styles.container} data={contatos} renderItem={exibirItem} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        boderBottomWidth: 1,
        borderColor: '#c1c4cd',
    },

    nome: {
        flex: 1,
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '500',
    },

    titulo: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '500',
    },
});
