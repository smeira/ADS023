import React from 'react';
import { moduleName } from 'react-native';

export default class TelaFlex extends Componente {
    render() {
        return(
            <View style={styles.principal}>
                <View style={styles.primeiro}></View>
                <View style={styles.segundo}></View>
                <View style={styles.terceiro}></View>
           </View>
        )
    }
};

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        flexDirection: 'row',
      }
      
      primeiro: {
         width: 50,
         height: 50,
         backgroundColor: 'powderblue',
      },
      segundo: {
         width: 50,
         height: 50,
         backgroundColor: 'skyblue',
      },
      terceiro: { 
         width: 50,
         height: 50,
         backgroundColor: 'steelblue',
      }
      
  });