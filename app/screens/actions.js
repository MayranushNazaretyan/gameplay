import React from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet, Image } from 'react-native';
import { Home, Work, Asmt, Soft, Hard, Docs, Close } from '../../assets/images';

export class ActionsScreen extends React.Component {
    render() {
        return (
            <View style={{ 
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: 25,
                backgroundColor: '#666666'}}>
                <View style={styles.close_container}>
                    <Image
                        style={styles.close}
                        source={Close}
                        />    
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
                    <View style={styles.action_container}>
                        <View style={styles.action}>
                            <Image
                                style={styles.action_img}
                                source={Home}
                                />                    
                        </View>
                        <Text style={styles.action_text}>Home</Text>
                    </View>
                    <View style={styles.action_container}>
                        <View style={styles.action}>
                            <Image
                                style={styles.action_img}
                                source={Work}
                                />                    
                        </View>
                        <Text style={styles.action_text}>Work</Text>
                    </View>
                    <View style={styles.action_container}>
                        <View style={styles.action}>
                            <Image
                                style={styles.action_img}
                                source={Asmt}
                                />                    
                        </View>
                        <Text style={styles.action_text}>ASMT</Text>
                    </View>
                </View>
                <View style={styles.actions_container}>
                    <View style={styles.action_container}>
                        <View style={styles.action}>
                            <Image
                                style={styles.action_img}
                                source={Soft}
                                />                    
                        </View>
                        <Text style={styles.action_text}>Soft</Text>
                    </View>
                    <View style={styles.action_container}>
                        <View style={styles.action}>
                            <Image
                                style={styles.action_img}
                                source={Hard}
                                />                    
                        </View>
                        <Text style={styles.action_text}>Hard</Text>
                    </View>
                    <View style={styles.action_container}>
                        <View style={styles.action}>
                            <Image
                                style={styles.action_img}
                                source={Docs}
                                />                    
                        </View>
                        <Text style={styles.action_text}>Docs</Text>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    close: {
        width: 60,
        height: 60,
        borderWidth: 3,        
        borderColor: '#CCCCCC',
        borderRadius: 50,
        tintColor: 'white'
    },
    actions_container: {
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

export default ActionsScreen;