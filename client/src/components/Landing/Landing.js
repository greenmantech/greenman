import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/logo.png';

class Landing extends Component {


    constructor(){
        super()
    }

    proceed = () => {
        console.log(history)
    }

    render() { 
        console.log(this.props.history)
        console.log('loaded')
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.title}>Greenman</Text>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.motto}>Clean nation, healthy citizens</Text>
                </View>
                <View style={styles.proceedButtonContainer}>
                    <TouchableOpacity style={styles.proceedButton} onPress={() => this.props.history.push('./index')}>
                        <Text style={styles.proceedButtonText}>PROCEED</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 70
    },
    logo: {
        width: 200,
        height: 150
    },
    title: {
        fontSize: 30,
        paddingBottom: 2
    },
    welcome: {
        fontSize: 20,
        paddingBottom: 2
    },
    motto: {
        fontSize: 14
    },
    proceedButtonContainer: {
        padding: 20,
    },
    proceedButton: {
        backgroundColor: '#ffffff10',
        padding: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#262626',
        borderWidth: 1.5,
        borderRadius: 4,
    },
    proceedButtonText: {
        fontSize: 18,
        fontWeight: '200',
        color: '#262626'
    }
});

export default Landing;