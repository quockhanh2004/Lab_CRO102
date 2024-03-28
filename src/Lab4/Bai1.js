import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Bai1 = (props) => {
    const [image, setImage] = useState(null);
    const {navigation} = props;

    const openCamera = async () => {

        const commonOptions = {
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 500,
        }


        const cameraOptions = {
            cameraType: 'front',
            saveToPhotos: false,
            ...commonOptions
        };

        launchCamera(cameraOptions, (response) => {
            if (response.assets) {
                setImage(response.assets[0]);
            } else {
                setImage(null);
            }
        });

    };

    const pickImage = async () => {

        const commonOptions = {
            mediaType: 'photo',
            maxWidth: 1160,
            maxHeight: 2500,
        }

        const libraryOptions = {
            setlimit: 10,
            ...commonOptions
        }

        launchImageLibrary(libraryOptions, (response) => {
            if (response.assets) {
                setImage(response.assets[0]);
            } else {
                setImage(null);
            }
        })
    }

    return (
        <View style={styles.container}>
            {image ? (
                <Image source={{ uri: image.uri }} style={{ width: 500, height: 500 }} />
            ) : (
                <Image
                    source={{
                        uri: 'https://github.com/Vencord/Vesktop/blob/main/static/shiggy.gif?raw=true',
                    }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            <TouchableOpacity onPress={() => openCamera()} style={{margin: 10, backgroundColor: 'lime', padding:5,borderRadius: 5}}>
                <Text>Take photos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pickImage()} style={{margin: 10, backgroundColor: 'lime', padding:5,borderRadius: 5}}>
                <Text>Pick Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lab4Bai3')} style={{margin: 10, backgroundColor: 'lime', padding:5,borderRadius: 5}}>
                <Text>Bài 3</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Bai1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
