import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import { Logo } from '../../assets/images';

class LoginScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'white' }}>
            <Image
                style={styles.logo}
                source={Logo}
                />
            <View  style={styles.usernameContainer}>
                <TextInput
                    style={styles.username}
                    placeholderTextColor= '#CCCCCC'
                    placeholder= 'Username'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => AsyncStorage.setItem('username', text)}
                />
            </View>
            <View  style={styles.usernameContainer}>
                <TextInput
                    password= {true}
                    secureTextEntry= {true}
                    style={styles.password}
                    placeholderTextColor= '#CCCCCC'
                    placeholder= '***********'
                    underlineColorAndroid='transparent'
                />
            </View>
            <TouchableHighlight 
                style={styles.container}
                onPress={() => this.props.navigation.navigate('About')}>
                <Text style={styles.button}>
                    {("login").toUpperCase()}
                </Text>
            </TouchableHighlight>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: '80%',
        height: 100
    },
    usernameContainer: {
        borderWidth: 1,        
        borderColor: '#CCCCCC',
        width: '80%', 
        height: 50,
        marginTop: 20
    },
    username: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontFamily: 'sourcesanspro-bold'
    },
    password: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontFamily: 'sourcesanspro-bold'
    },
    container: {
        width: '80%',
        height: 60,
        backgroundColor: '#A3C644',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    button: {     
        color: '#fff',
        fontSize: 30,
        fontFamily: 'sourcesanspro-semibold'
    },
  });

export default LoginScreen;