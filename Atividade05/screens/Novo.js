import React from 'react'
import { View, StyleSheet, Text, Picker, TextInput, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

Icon.loadFont();

export default function Novo() {
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="left" size={20} color='white' />
                </TouchableOpacity>

                <Text style={styles.title}>Novo Requerimento</Text>
                <Button color='red' title='Salvar' />
            </View>

            <View style={{ paddingLeft: 16 }}>
                <Text style={styles.label}>Disciplina</Text>

                <Picker>
                    <Picker.Item label='Selecione uma disciplina' value='' />
                    <Picker.Item label='ADS023 - Programação para Dispositivos Móveis' value='ADS023' />
                    <Picker.Item label='RCT024 - Gerência de Projetos' value='RCT024' />
                </Picker>

                <Text style={styles.label}>Prova</Text>

                <Picker>
                    <Picker.Item label='Selecione uma prova' value='' />
                    <Picker.Item label='Prova A1' value='A1' />
                    <Picker.Item label='Prova A2' value='A2' />
                    <Picker.Item label='Prova A3' value='A3' />
                </Picker>

                <TextInput
                    style={styles.textarea}
                    placeholder='Argumentação'
                    placeholderTextColor='#92949c'
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 56,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8
    },

    title: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },

    label: {
        fontFamily: 'Arial',
        fontSize: 13,
        color: '#92949c',
        paddingTop: 16,
        paddingBottom: 8
    },
    textarea: {
        borderBottomWidth: 1,
        borderColor: '#c1c4cd',
        paddingTop: 16
    }
});