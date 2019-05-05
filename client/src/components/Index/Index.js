import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-elements'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Components
import Home from '../Home/Home'
import Camera from '../Camera/Camera'
import Map from '../Map/Map'

const IndexNavigator = createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({
            Home: {
                screen: Home,
                navigationOptions: {
                    title: 'Home',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: { textAlign: 'center', flex: 1 },
                }
            }
        }),
        navigationOptions: {
            tabBarIcon: ({ focused }) => focused ? <Icon name="home" type="font-awesome" color="#fff" size={24} /> : <Icon raised name="home" type="font-awesome" color="#333" size={24} />
        }
    },
    Camera: {
        screen: createStackNavigator({
            Camera: {
                screen: ({ navigation }) => <Camera />,
                navigationOptions: {
                    title: 'Camera',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: { textAlign: 'center', flex: 1 },
                }
            }
        }),
        navigationOptions: {
            title: 'Camera',
            tabBarIcon: ({ focused }) => focused ? <Icon name="camera" type="font-awesome" color="#fff" size={24} /> : <Icon raised name="camera" type="font-awesome" color="#333" size={24} />
        }
    },
    Map: {
        screen: createStackNavigator({
            Map: {
                screen: Map,
                navigationOptions: {
                    title: 'Map',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: { textAlign: 'center', flex: 1 },
                }
            }
        }),
        navigationOptions: {
            tabBarVisible: true,
            tabBarIcon: ({ focused }) => focused ? <Icon name="map" type="font-awesome" color="#fff" size={24} /> : <Icon raised name="map" type="font-awesome" color="#333" size={24} />

        }
    }
},
    {
        animationEnabled: true,
        tabBarOptions: {
            activeBackgroundColor: '#333333',
            activeTintColor: '#fff',
            style: {
                backgroundColor: '#fff',
                borderColor: '#333',
                shadowColor: '#fff',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginTop: 2
            }
        }
    })


const Index = createAppContainer(IndexNavigator)
export default Index;

