import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// import { MapView, Marker } from 'react-native-maps';
// import MapView from 'react-native-maps'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import unresolved from '../../assets/images/unresolved.png'
import resolved from '../../assets/images/resolved.png'

import axios from 'axios'

class Map extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }
    static navigationOptions = {
        title: 'Map',
        headerStyle: { backgroundColor: '#333333' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { position: 'relative', flex: 1, textAlign: 'center', alignSelf: 'center' },
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
    }

    componentDidMount() {
        axios.get('http://192.168.0.138:5000/api/posts')
            .then(posts => {
                console.log(posts.data)
                this.setState({ posts: [...posts.data] })
                console.log(this.state.posts)
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        console.log('clear state in map component')
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 5.6207,
                        longitude: -0.1944,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {this.state.posts.map(post => (
                        <Marker
                            key={post._id}
                            coordinate={{ latitude: post.coordinates[0], longitude: post.coordinates[1] }}

                        >
                            <View>
                                {post.status === 'UNRESOLVED' ?
                                    <Image
                                        style={styles.pin}
                                        source={unresolved}
                                    /> :
                                    <Image
                                        style={styles.pin}
                                        source={resolved}
                                    />
                                }

                            </View>


                        </Marker>
                    ))}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cancelPhotoButton: {
        alignItems: 'center',
        paddingTop: '110%',
        // flex: 6
    },
    container: {
        flex: 1,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    pin: {
        // width: 10,
        // height:
    }
});

export default Map