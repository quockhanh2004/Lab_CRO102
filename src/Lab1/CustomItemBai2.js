import { StyleSheet, Text, View, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

const CustomItemBai2 = (props) => {
    const { data } = props;
    return (
        <FlatList data={data}
            horizontal={true}
            style={{ flex: 1, marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Item
                    location={item.location}
                    timeGo={item.timeGo}
                    vehicle={item.vehicle}
                    time={item.time}
                    image={item.image}
                />
            )} />
    )
}

const Item = (props) => {
    const { location, timeGo, vehicle, time, image } = props;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoading(false); // Khi hình ảnh đã load xong
    };

    const handleLoadError = () => {
        setLoading(false); // Khi xảy ra lỗi khi tải hình ảnh
        setError(true);
    };
    return (
        <View style={[styles.container, !image && { height: 230 }]}>
            <Text style={styles.textHint}>Địa điểm</Text>
            <Text style={styles.textData}>{location}</Text>
            <Text style={styles.textHint}>Thời gian</Text>
            <Text style={styles.textData}>{timeGo}</Text>
            <Text style={styles.textHint}>Phương tiện di chuyển</Text>
            <Text style={styles.textData}>{vehicle}</Text>
            <Text style={styles.textHint}>Thời gian</Text>
            <Text style={styles.textData}>{time}</Text>

            {!!image &&
                (
                    <View>
                        <Text style={styles.textHint}>Hình ảnh</Text>
                        < Image
                            source={{ uri: image }}
                            style={styles.image} />
                    </View>
                )}

        </View>
    )

}

export default CustomItemBai2

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    textData: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'

    },
    textHint: {
        color: 'gray',
        fontSize: 12,
        fontWeight: '400',
        marginTop: 10,
    },
    container: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 450,
        borderRadius: 10,
        marginEnd: 10,
        padding: 10,
        flexDirection: 'column'
    },
})