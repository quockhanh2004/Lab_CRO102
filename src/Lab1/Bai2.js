import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import { CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import CustomItemBai2 from './CustomItemBai2';

const Bai2 = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.txtLich}>Lịch trình</Text>
            <CustomItemBai2 data={data} />
            <Button title='Bài 3' onPress={() => navigation.navigate('bai3')} />
        </View>
    )
}

export default Bai2

const styles = StyleSheet.create({
    txtLich: {
        fontSize: 26,
        color: 'black',
        fontWeight: '600'
    },
    container: {
        // backgroundColor: '#0F0F29',
        flex: 1,
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: '#dddddd'
    }
});

const data = [
    {
        location: 'Hồ tràm, Vũng tàu',
        timeGo: '09:00 AM - 12:00 AM, 12/12/2024',
        vehicle: 'Xe bus',
        time: '21:00 - 22:00',
        image: 'https://cms.haivan.com/photos/top-6-dia-diem-du-lich-bien-vung-tau-dep-nhat-2.jpg',
    },
    {
        location: 'Nha Trang, Khánh Hòa',
        timeGo: '08:30 AM - 01:00 PM, 15/12/2024',
        vehicle: 'Xe máy',
        time: '20:30 - 21:30',
        image: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/bai-bien-nha-trang-1-e1517390091414.jpg',
    },
    {
        location: 'Đà Lạt, Lâm Đồng',
        timeGo: '10:00 AM - 03:00 PM, 20/12/2024',
        vehicle: 'Ô tô',
        time: '18:00 - 19:00',
        image: '',
    },
];