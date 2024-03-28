import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import React from 'react'

import Animated, { Easing, ReduceMotion, useSharedValue, withSequence, withSpring, withTiming, withRepeat, useAnimatedStyle } from 'react-native-reanimated';


const Animation1 = (props) => {
    const { navigation } = props;
    const width = useSharedValue(100);
    const height = useSharedValue(100);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const rotate = useSharedValue(0)

    const animation1 = () => {
        width.value = withSpring(width.value + 50, {
            mass: 5,
            damping: 7,
            stiffness: 100
        });
        height.value = withSpring(height.value + 50, {
            mass: 5,
            damping: 7,
            stiffness: 100
        });
    }

    const animation2 = () => {
        width.value = withSpring(width.value + 50, {
            overshootClamping: true,

        });
        height.value = withSpring(width.value + 50, {
            overshootClamping: true,

        });

    }

    const animation3 = () => {
        translateY.value = withSpring(translateY.value + 400, {
            overshootClamping: true,
        });
    }

    const animation4 = () => {
        width.value = withSpring(width.value + 50, {
            overshootClamping: true,
        });
        height.value = withSpring(width.value + 50, {
            overshootClamping: true,
        });
        setTimeout(
            () => {
                width.value = withSpring(width.value + 50,)
                height.value = withSpring(width.value + 50,)
            }, 2000
        )
    }

    const animation5 = () => {

        const duration = 500;
        const easing = Easing.linear;


        rotate.value = withSequence(
            withTiming(90, { duration, easing }),
            withTiming(0, { duration, easing }),
        )

    }

    const reset = () => {
        width.value = withSpring(100, {
            overshootClamping: true,
        });;
        height.value = withSpring(100, {
            overshootClamping: true,
        });;
        translateX.value = withSpring(0, {
            overshootClamping: true,
        });;
        translateY.value = withSpring(0, {
            overshootClamping: true,
        });;
        rotate.value = withSpring(0, {
            overshootClamping: true,
        })
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotate.value}deg` }, { translateX: translateX.value }, { translateY: translateY.value }],
            backgroundColor: 'violet',
            width: width.value,
            height: height.value,
        };
    });

    return (
        <Animated.View
            style={styles.container}>
            <Animated.View
                style={[styles.box, animatedStyle]}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => animation1()}>
                <Text style={{color: '#fff'}}>
                    animation1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => animation2()}>
                <Text style={{color: '#fff'}}>
                    animation2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => animation3()}>
                <Text style={{color: '#fff'}}>
                    animation3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => animation4()}>
                <Text style={{color: '#fff'}}>
                    animation4
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => animation5()}>
                <Text style={{color: '#fff'}}>
                    animation5
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => reset()}>
                <Text style={{color: '#fff'}}>
                    reset
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Animation2')}>
                <Text style={{color: '#fff'}}>
                    Animation6
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Animation1

const styles = StyleSheet.create({
    buttonContainer: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginTop: 20,
        borderRadius: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})