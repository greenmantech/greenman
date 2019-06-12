import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Badge } from 'react-native-elements'

const usersData = [
    {
        id: 1,
        name: 'Irene May',
        rank: 1,
        points: 187,
        avatar: 'https://randomuser.me/api/portraits/med/women/59.jpg',
        location: 'Weija'
    },
    {
        id: 2,
        name: 'Aiden Lucas',
        rank: 2,
        points: 136,
        avatar: 'https://randomuser.me/api/portraits/med/men/4.jpg',
        location: 'Tema'
    },
    {
        id: 3,
        name: 'Joseph Lambert',
        rank: 3,
        points: 120,
        avatar: 'https://randomuser.me/api/portraits/med/men/13.jpg',
        location: 'Nungua'
    },
    {
        id: 4,
        name: 'Tina Jennings',
        rank: 4,
        points: 119,
        avatar: 'https://randomuser.me/api/portraits/med/women/22.jpg',
        location: 'Bantama'
    },
    {
        id: 5,
        name: 'Irma Gibson',
        rank: 5,
        points: 103,
        avatar: 'https://randomuser.me/api/portraits/med/women/53.jpg',
        location: 'Tamale'
    },
    {
        id: 6,
        name: 'Lloyd Barnet',
        rank: 6,
        points: 91,
        avatar: 'https://randomuser.me/api/portraits/med/men/19.jpg',
        location: 'East Legon'
    },
    {
        id: 7,
        name: 'Katherine Kennedy',
        rank: 7,
        points: 83,
        avatar: 'https://randomuser.me/api/portraits/med/women/30.jpg',
        location: 'Adenta'
    },
    {
        id: 8,
        name: 'Derrick Cooper',
        rank: 7,
        points: 83,
        avatar: 'https://randomuser.me/api/portraits/med/men/95.jpg',
        location: 'Kumasi'
    },
    {
        id: 9,
        name: 'Janice Holt',
        rank: 9,
        points: 80,
        avatar: 'https://randomuser.me/api/portraits/med/women/36.jpg',
        location: 'Berekuso'
    },
    {
        id: 10,
        name: 'Jeremiah Guiterrez',
        rank: 10,
        points: 79,
        avatar: 'https://randomuser.me/api/portraits/med/men/37.jpg',
        location: 'Shiashie'
    }
]
export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: { backgroundColor: '#333333' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { textAlign: 'center', flex: 1 },
        headerLeft: (
            <View style={{ paddingLeft: 15 }}>
            </View>
        ),
        headerRight: (
            <View style={{ paddingRight: 15 }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Icon iconStyle={{ marginRight: 15 }} name="cog" type="font-awesome" color="#aaa" size={24} />
                </TouchableOpacity>
            </View>
        )
    };
    // https://gravatar.com/avatar/60c51a05870d5d3d0ef3bd6d92c7f69a?s=200&r=pg&d=mm
    render() {
        return (
            <View>
                <FlatList
                    data={usersData}
                    renderItem={({ item }) =>
                        <View style={styles.userRank}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.userImage}
                            />
                            <View style={styles.userInfo}>
                                <Text style={styles.userPoints}>
                                    {`${item.points} points`}
                                </Text>
                                <Text style={styles.userName}>
                                    {item.name}
                                </Text>
                                <Text style={styles.userLocation}>
                                    {item.location}
                                </Text>
                            </View>
                            <View style={styles.userPosition}>
                                <Text>{`#${item.rank}`}</Text>
                            </View>

                            {/* <Badge value={item.rank} textStyle={{ color: '#fff' }} containerStyle={styles.userPosition} /> */}
                        </View>}
                />
                {/* <View style={styles.userRank}>
                    <Image
                        source={{ uri: 'https://gravatar.com/avatar/60c51a05870d5d3d0ef3bd6d92c7f69a?s=200&r=pg&d=mm' }}
                        style={{ width: 40, height: 40, borderRadius: 40 / 2, margin: 5 }}
                    />
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userRank: {
        flex: 1,
        height: 80,
        borderColor: '#00000010',
        borderWidth: 1,
        margin: 5,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        margin: 5
    },
    userInfo: {
        flexDirection: 'column',
    },
    userPoints: {
        marginLeft: 12,
        fontSize: 24,
        fontWeight: '400'
    },
    userName: {
        marginLeft: 12,
        fontSize: 16,
    },
    userLocation: {
        marginLeft: 12,
        fontSize: 10,
        color: '#088FAE'
    },
    userPosition: {
        marginLeft: 120,
        marginTop: 54,
        fontSize: 10,
        fontWeight: '600'
    }
})
// export default Home