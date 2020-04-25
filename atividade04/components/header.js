import React from 'react';
import { moduleName } from 'react-native';

export default function Header(props) {

    return (
        <View style={styles.container}>
           <Text style={styles.title}>{props.children}>Meu App</Text>
        </View>
      );      
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#c1c4cd'
      }

      title: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '500',
        color: '#424242'
      }
});