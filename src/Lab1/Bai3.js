import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import InputView from './InputView'

const Bai3 = () => {
    const [input, setinput] = useState('')
    const [i, setI] = useState('')
    const inputRef = useRef(null);
    const textRef = useRef(null);

    const sendCheck = () => {
        inputRef.current?.check();
        textRef.current?.check();
    };

    const check = () => {
        sendCheck();
    }

    return (
        <View style={styles.container}>
            <InputView
                ref={inputRef}
                placeholder={'input'}
                placeholderTextColor='#999'
                hidePassword={true}
                onTextChange={setinput}
                style={{ marginHorizontal: 10, marginTop: 10, }}
            />
            <InputView
                ref={textRef}
                placeholder={'text'}
                placeholderTextColor='#999'
                onTextChange={setI}
                style={{ marginHorizontal: 10, marginTop: 10, }}
            />
            <TouchableOpacity onPress={check} style={{ backgroundColor: 'green', padding: 10, margin: 10, borderRadius: 10 }}>
                <Text style={styles.text}>Check</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Bai3

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    }
})