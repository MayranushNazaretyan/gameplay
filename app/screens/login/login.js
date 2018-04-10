import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, TextInput, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { Logo } from '../../../assets/images/index';
import {connect} from "react-redux";
import {loginActions} from "../../redux/actions/index";
import {styles} from "./loginStyles";

class LoginScreen extends React.Component {

    afterLogin() {
        this.props.navigation.navigate('Main');
    }

    saveUsername(name) {
        AsyncStorage.setItem('username', name);
    }

    render() {
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
                        onChangeText={(text) => this.saveUsername(text)}
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
                    onPress={() => this.afterLogin()}
                    underlayColor="#7F993A">
                    <Text style={styles.button}>
                        {("login").toUpperCase()}
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
      );
    }
}

export {LoginScreen};
export default connect(
    state => ({...state.loginReducer}),
    {...loginActions}
)(LoginScreen);
