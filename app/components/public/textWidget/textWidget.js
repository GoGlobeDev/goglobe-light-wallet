import React, { Component } from 'react';
import {    
    View,
    TextInput
} from 'react-native';

class textWidget extends Component {   
    render() {
        return (
            <View>
                <TextInput
                    underlineColorAndroid="transparent"
                    {...this.props}                    
                >
                </TextInput>
            </View>
        );
    }
}
export default textWidget;