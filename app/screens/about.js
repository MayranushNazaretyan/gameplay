import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export class AboutScreen extends React.Component {
    render() {
      return (
        <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: 25 }}>
          <Text style={{            
            fontSize: 28,
            fontFamily: 'sourcesanspro-bold',
            color: '#CCCCCC', }}>          
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
      );
    }
}

export default AboutScreen;