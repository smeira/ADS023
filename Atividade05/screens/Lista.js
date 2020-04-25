import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const requerimentos = [
    {
        title: { curso: 'Análise e Desenvolvimento de Sistemas', periodo: '20191' },
        data: [
            { id: 1, disciplina: 'ADS023 - Programação para Dispositivos Móveis', prova: 'Prova A1', status: 'D' },
            { id: 2, disciplina: 'RCT024 - Gerência de Projetos', prova: 'Prova A2', status: 'I' }
        ]
    },
];

export default function Lista() {
    return (
        <View style={styles.container}>
            <View style={styles.header1}>
                <Image style={styles.logo} source={require('../assets/logo_branca.png')} />
                <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                    <Text style={styles.title1}>Aluno Online</Text>
                </View>

                <TouchableOpacity>
                    <Icon name="logout" color='white' size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.header2}>
                <Text style={styles.title2}>Seus requerimentos</Text>
            </View>

            <SectionList
                sections={requerimentos}
                keyExtractor={item => item.id}
                renderSectionHeader={({ section }) => {
                    return (
                        <View style={styles.header3}>
                            <Text style={styles.title3}>{section.title.curso}</Text>
                            <Text style={styles.title3}>Período {section.title.periodo}</Text>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    const icon = (item.status == 'D') ? { name: 'checkcircle', color: '#10dc60' } : { name: 'closecircle', color: '#f04141' };
                    return (
                        <View style={styles.list}>
                            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <Text style={styles.title4}>{item.disciplina}</Text>
                                <Text style={[styles.title4, { color: '#92949c' }]}>{item.prova}</Text>
                            </View>
                            <View style={styles.status}>
                                <Icon name={icon.name} size={21} color={icon.color} />
                            </View>
                        </View>
                    );
                }}
            />

            <TouchableOpacity style={styles.fab}>
                <Icon name="pluscircle" size={56} color='red' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header1: {
        height: 56,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8
    },

    header2: {
        paddingLeft: 16,
        height: 40,
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 8
    },

    fab: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },

    logo: {
        height: 32,
        width: 32,
        marginRight: 8
    },

    title1: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },

    title2: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '500'
    },

    header3: {
        paddingLeft: 16,
        height: 50,
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 8,
        backgroundColor: '#f4f5f8',
        flexDirection: 'column'
    },
    title3: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '500'
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#c1c4cd',
        marginLeft: 16
    },
    title4: {
        fontFamily: 'Arial',
        fontSize: 14,
    },
    status: {
        position: 'absolute',
        right: 8
    },

});