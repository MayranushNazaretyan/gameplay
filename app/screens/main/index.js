import React from 'react';
import {View, Text, Button, AsyncStorage, StyleSheet, Image, Animated, Dimensions} from 'react-native';
import {Boy} from '../../../assets/images/index';
import {loginActions} from "../../redux/actions/index";
import {connect} from "react-redux";
import {ProgressBar} from "../../components";
import {styles} from "./styles";

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.boy}
                    source={Boy}
                />
                {this.props.skills.map((item, index) => {
                    return (
                        <View key={index} style={styles.progress_container}>
                            <Text style={styles.progress_title}>{item.name}</Text>
                            <ProgressBar value={item.value} />
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
