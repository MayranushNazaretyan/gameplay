import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './app/screens/login/login';
import AboutScreen from './app/screens/about/about';
import MainScreen from './app/screens/main/main';
import ActionsScreen from './app/screens/actions/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './app/redux/store.js';

const RootStack = StackNavigator({
    Login: {
        screen: LoginScreen,       
        navigationOptions: {
            header: null
        }   
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            drawerLabel: 'Home',
            title: '<about>',            
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: { 
                paddingLeft: 80
            }       
        },
    },
    Main: {
        screen: MainScreen,
        navigationOptions:  ({navigation}) => ({               
            title: '<epamer>',            
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: { 
                paddingLeft: 80
            },
            headerRight: <Icon style={{paddingRight: 20}} name="account" size={30} color="white"  onPress={() =>  navigation.navigate('Actions')} />
        }),
    },
    Actions: {
        screen: ActionsScreen,       
        navigationOptions: {
            header: null
        }    
    },
},
{
    initialRouteName: 'Login'
});
  
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>);
    }
}