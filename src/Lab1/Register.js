import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader'

const Register = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <CustomHeader iconLeft={require('../../img/logo.png')} header={'hihi'} iconRight={require('../../img/logo.png')} />
            <CustomHeader iconLeft={require('../../img/logo.png')} header={'hihi'}  />
            <CustomHeader header={'hihi'}  />
            <CustomHeader iconLeft={require('../../img/logo.png')} />
            <CustomHeader iconRight={require('../../img/logo.png')} />
            <Button title='bài 2' onPress={() => navigation.navigate('bai2')}/>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#0F0F29',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    groupInput: {
        width: '100%',
        height: 'auto',
    },
    logo: {
        width: 120,
        height: 120,
        alignItems: 'center',

    },
    container: {
        // backgroundColor: '#0F0F29',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    }
})