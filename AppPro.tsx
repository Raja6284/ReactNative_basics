/* eslint-disable react-native/no-inline-styles */

import React, { JSX, useState } from "react";

import {View, Text, StyleSheet,useColorScheme} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


function AppPro():JSX.Element{

    //const isDark = useColorScheme() === 'dark'
    const isDark = useColorScheme() === 'light'

    // const [theme,setTheme] = useState('dark')

    // function handleTheme():string{

    // }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'yellow'}}>
             <View style={styles.container}>

                <Text style={isDark ? styles.darkTheme : styles.whiteTheme}>
                    most of the thing shifted to D drive
                </Text>
                <Text style={isDark ? styles.darkTheme : styles.whiteTheme}>
                    Hi, this is app pro
                </Text>

            </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    darkTheme:{
        backgroundColor:'black',
        color:'white'
    },
    whiteTheme:{
        backgroundColor:'white',
        color:'black'
    }
})

export default AppPro