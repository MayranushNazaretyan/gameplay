import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { Logo } from '../../assets/images';
import {connect} from "react-redux";
import {loginActions} from "../redux/actions/index";

class LoginScreen extends React.Component {
    render() {
        console.log(this.props,"----------------")
      return (
        <View             
            style={styles.container}>
            <View  style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={Logo}
                    />
            </View>
            <View  style={styles.formContainer}>
                <View  style={styles.inputContainer}>
                    <TextInput
                        style={styles.username}
                        placeholderTextColor= '#CCCCCC'
                        placeholder= 'Username'
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => AsyncStorage.setItem('username', text)}
                    />
                </View>
                <View  style={styles.inputContainer}>
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
                    activeOpacity= {1}
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.button}>
                        {("login").toUpperCase()}
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: 100
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    inputContainer: {
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
    buttonContainer: {
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

export {LoginScreen};
export default connect(
    state => ({...state.loginReducer}),
    {...loginActions}
)(LoginScreen);
