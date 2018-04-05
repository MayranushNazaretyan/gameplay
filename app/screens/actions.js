import React from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet, Image } from 'react-native';
import { Home, Work, Asmt, Soft, Hard, Docs, Close } from '../../assets/images';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {connect} from "react-redux";
import {loginActions} from "../redux/actions/index";


class ActionsScreen extends React.Component {
    render() {
        console.log(this.props, "  ssssssssssss");
        const { goBack } = this.props.navigation;
        return (
            <View style={{ 
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: 25,
                backgroundColor: '#666666'}}>
                <View style={styles.close_container}>
                    <View style={styles.close}>
                        <Icon name="close" size={30} color="white"  onPress={() =>  goBack()} />    
                    </View>
                </View>                 
                <Text style={{            
                    fontSize: 28,
                    fontFamily: 'sourcesanspro-bold',
                    color: 'white', }}>{"<Username>"}</Text>
                <Text style={{            
                    fontSize: 28,
                    fontFamily: 'sourcesanspro-bold',
                    color: '#39C2D7', }}>Junior software engineer</Text>
                <View style={styles.actions_container}>
                    {this.props.actions.map((item,index) => {
                        return(
                                <View key={index} style={styles.action_container}>
                                    <View style={styles.action}>
                                        <Icon name={item.icon} size={30} color="white" />                    
                                    </View>
                                    <Text style={styles.action_text}>{item.title}</Text>
                                </View>
                        )
                    })                        
                   }                   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    close_container: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    close: {
        width: 60,
        height: 60,
        borderWidth: 3,        
        borderColor: '#CCCCCC',
        borderRadius: 50,      
        justifyContent: 'center',
        alignItems: 'center'
    },
    actions_container: {
        width: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    action_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10
    },
    action: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderWidth: 5,        
        borderColor: '#CCCCCC',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_img: {
        width: 70,
        height: 70,
        tintColor: 'white'
    },
    action_text: {
        width: 100,
        height: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'sourcesanspro-regular'
    }
});


export {ActionsScreen};
export default connect(
    state => ({...state.actionReducer}),
    {...loginActions}
)(ActionsScreen);