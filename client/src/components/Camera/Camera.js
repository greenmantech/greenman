import React, { Component } from 'react'
import { Text, View, AppRegistry, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'

class Camera extends Component {
    static navigationOptions = {
        title: 'Camera',
        headerStyle: { backgroundColor: '#333333' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { textAlign: 'center', flex: 1 },
        headerLeft: (
            <View style={{ paddingLeft: 15 }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Icon name="times" type="font-awesome" color="#aaa" size={24} />
                </TouchableOpacity>
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

    constructor(props) {
        super(props)

        this.state = {
            picture: '',
            coordinates: ''
        }

    }

    componentDidMount(){
        console.log('Component did mount')
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }
    captureImage = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);

            let postData = {
                user: 1,
                coordinates: '',
                image: `data:image/jpeg;base64,${data.base64}`,
            }

            this.sendImageData(postData)
        }
    }

    getGeolocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    let coordinates = `${position.coords.longitude}, ${position.coords.latitude}`
                    resolve(coordinates);
                },
                error => reject(error),
                { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
            )
        })
    }

    sendImageData = (postData) => {
        this.getGeolocation()
            .then(coords => postData.coordinates = coords)
            .then(() => console.table(postData))
            .then(() => {
                axios.post('http://192.168.0.138:5000/api/posts', postData)
                    .then(() => console.log('Successful'))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera ref={ref => { this.camera = ref }}
                    style={styles.cameraView}
                    type={RNCamera.Constants.Type.back}
                    // flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}

                >
                    <TouchableOpacity style={styles.captureButton} activeOpacity={0.5} onPress={this.captureImage}>
                        <Image
                            source={require('../../assets/images/ellipse.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                </RNCamera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    cameraView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    captureButton: {
        flex: 0,
        backgroundColor: 'transparent',
        marginBottom: 15
    }
})

export default Camera