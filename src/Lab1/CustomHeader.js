import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomHeader = (props) => {
    const { iconLeft, iconRight, header } = props
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                {!!iconLeft && <Image source={iconLeft} style={styles.icon} />}
            </View>
            <Text style={styles.txt}>{header}</Text>
            <View style={styles.imgContainer}>
                {!!iconRight &&
                    <Image style={styles.icon} source={iconRight} />
                }
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    icon: {
        width: 40,
        height: 40,
    },
    imgContainer: {
        width: 40,
        height: 40,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 2,
        marginHorizontal: 5,
    }
})