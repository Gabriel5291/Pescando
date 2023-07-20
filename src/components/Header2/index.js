import React from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const statusBarHeight = StatusBar.currentHeight ? StatusBar. currentHeight : 64;



export default function Header2({ name }){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Animatable.Text animation={"fadeInLeft"} delay={100} style={styles.username}>{name}</Animatable.Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#38a69d',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 16,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
});