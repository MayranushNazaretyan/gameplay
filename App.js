import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './app/screens/login';
import AboutScreen from './app/screens/about';
import MainScreen from './app/screens/main';
import ActionsScreen from './app/screens/actions';

const RootStack = StackNavigator({
    Login: {
        screen: LoginScreen
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
        navigationOptions: {            
            title: '<epamer>',            
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: { 
                paddingLeft: 140
            }       
        },
    },
    Actions: {
        screen: ActionsScreen,
        headerMode: 'none',
        header: null,
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
        return <RootStack />;
    }
}