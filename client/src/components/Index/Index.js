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
            }
        }),
        navigationOptions: {
            tabBarIcon: ({ focused }) => focused ? <Icon name="home" type="font-awesome" color="#fff" size={24} /> : <Icon raised name="home" type="font-awesome" color="#333" size={24} />
        }
    },
    Camera: {
        screen: createStackNavigator({
            Camera: {
                screen: Camera,
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
                // borderColor: '#333',
                shadowColor: 'grey',
                shadowOffset: { width: 5, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 4,
                // marginTop: 2,
                // boxShadow: "10px 5px 5px #333"
            }
        }
    })


const Index = createAppContainer(IndexNavigator)
export default Index;

