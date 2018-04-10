import React from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { Boy } from '../../../assets/images/index';
import {loginActions} from "../../redux/actions/index";
import {connect} from "react-redux";
import {styles} from "./mainStyles";

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.progress = new Animated.Value(0);
    }

    getProgressStyles(val) {
        Animated.timing(this.progress, {
            toValue: val,
            duration: 2000
        }).start();
        return {
            maxWidth: val,
            width: this.progress,
            height: 15,
            backgroundColor: '#B22746',
            borderRadius: 7
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#CCCCCC'
            }}>
                <Image
                    style={styles.boy}
                    source={Boy}
                />

                {this.props.skills.map((item, index) => {
                    return(
                        <View key={index} style={styles.progress_container}>
                            <Text style={{
                                fontSize: 24,
                                fontFamily: 'sourcesanspro-bold',
                                color: '#464547', }}>{item.name}</Text>
                            <View style={styles.progress}>
                                <Animated.View style={[this.getProgressStyles.call(this, item.value)]}>
                                </Animated.View>
                            </View>
                        </View>
                    )
                })
                }
            </View>
        );
    }
}

export {MainScreen};
export default connect(
    state => ({...state.mainReducer}),
    {...loginActions}
)(MainScreen);