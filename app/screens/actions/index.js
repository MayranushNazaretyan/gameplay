import React from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet, Image } from 'react-native';
import { Home, Work, Asmt, Soft, Hard, Docs, Close } from '../../../assets/images/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {loginActions} from "../../redux/actions/index";
import {styles} from "./styles";

class ActionsScreen extends React.Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.actions_page}>
                <View style={styles.close_container}>
                    <View style={styles.close}>
                        <Icon name="close" size={30} color="white"  onPress={goBack} />
                    </View>
                </View>
                <Text style={styles.username}>{"<Username>"}</Text>
                <Text style={styles.position}>Junior software engineer</Text>
                <View style={styles.actions_container}>
                    {this.props.actions.map((item,index) => {
                        return(
                            <View key={index} style={styles.action_container}>
                                <View style={styles.action}>
                                    <Icon name={item.icon} size={60} color="white" />
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

export {ActionsScreen};
export default connect(
    state => ({...state.mainReducer}),
    {...loginActions}
)(ActionsScreen);
