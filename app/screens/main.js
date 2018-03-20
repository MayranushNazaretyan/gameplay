import React from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { Boy } from '../../assets/images';

export class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.progress = new Animated.Value(0);
    }
    getProgressStyles() {             
        return {
          width: 44,
          height: 15, //height of the progress bar
          backgroundColor: '#B22746',
          borderRadius: 7 
        }
    }
    componentDidMount() {
        Animated.timing(this.progress, {
            duration: 7000,
            toValue: 100
        });
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
            <View style={styles.progress_container}>
                <Text style={{            
                    fontSize: 24,
                    fontFamily: 'sourcesanspro-bold',
                    color: '#464547', }}>Personal</Text>
                <View style={styles.progress}>
                    <Animated.View style={[this.getProgressStyles.call(this)]}> 
                    </Animated.View>
                </View>
            </View>
            <View style={styles.progress_container}>
                <Text style={{            
                    fontSize: 24,
                    fontFamily: 'sourcesanspro-bold',
                    color: '#464547', }}>Project Activities</Text>
                <View style={styles.progress}>
                    <Animated.View style={[this.getProgressStyles.call(this)]}> 
                    </Animated.View>
                </View>
            </View>
            <View style={styles.progress_container}>
                <Text style={{            
                    fontSize: 24,
                    fontFamily: 'sourcesanspro-bold',
                    color: '#464547', }}>Soft Skills</Text>
                <View style={styles.progress}>
                    <Animated.View style={[this.getProgressStyles.call(this)]}> 
                    </Animated.View>
                </View>
            </View>
            <View style={styles.progress_container}>
                <Text style={{            
                    fontSize: 24,
                    fontFamily: 'sourcesanspro-bold',
                    color: '#464547', }}>Hard Skills</Text>
                <View style={styles.progress}>
                    <Animated.View style={[this.getProgressStyles.call(this)]}> 
                    </Animated.View>
                </View>
            </View>
        </View>
      );
    }
}


const styles = StyleSheet.create({
    boy: {
        width: '60%',
        height: 260,
        marginBottom: 20
    },
    progress_container: {        
        width: '70%',
        height: 60,
        display: 'flex',
        alignItems: 'flex-start',
       
    },
    progress: {   
        width: '100%',     
        height: 15,      
        backgroundColor: '#464547',
        borderRadius: 7
    }
});

export default MainScreen;