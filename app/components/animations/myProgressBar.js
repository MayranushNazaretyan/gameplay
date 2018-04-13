import React from 'react';
import PropTypes from "prop-types";
import {View, Text, Button, AsyncStorage} from 'react-native';
import {styles} from "./styles";

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.progress = new Animated.Value(0);
    }

    static propTypes = {
        value: PropTypes.number.isRequired
    };

    getProgressStyles() {
        return {
            width: this.progress,
            height: 15,
            backgroundColor: '#B22746',
            borderRadius: 7
        }
    }

    componentDidMount() {
        Animated.timing(this.progress, {
            toValue: this.props.value,
            duration: 1000
        }).start();
    }

    render() {
        return (
            <View style={styles.progress}>
                <Animated.View style={[this.getProgressStyles.call(this)]}>
                </Animated.View>
            </View>
        );
    }
}

export {ProgressBar};
export default connect(
    state => ({...state.mainReducer}),
    {...loginActions}
)(ProgressBar);
