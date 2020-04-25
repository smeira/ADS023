import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image } from 'react-native';

export default function Login() {
    return (
        <View style={StyleSheet.container}>

            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../assets/logo_vermelha.png')} />
                <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                    <Text style={styles.title}>
                        <Text>aluno</Text>
                        <Text style={{ color: '#92949c' }}>online</Text>
                    </Text>
                </View>
            </View>

            <View style={{ paddingTop: 16 }}>
                <TextInput style={styles.input} placeholder='Matrícula' keyboardType='numeric' require='true' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} require='true' />
            </View>

            <View style={{ paddingTop: 32 }}>
                <Button color='red' title='Entrar' />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20
    },

    logo: {
        height: 68,
        width: 68
    },

    title: {
        fontFamily: 'Arial',
        fontSize: 26,
        fontWeight: 'bold'
    },

    input: {
        height: 40,
        padding: 8,
        marginTop: 8,
        borderBottomWidth: 1,
        borderColor: '#c1c4cd',
        fontFamily: 'Arial',
        fontSize: 16
    }
});