import React from 'react';
import {
    StatusBar,
    Text,
    View
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

class Tab0 extends React.Component {

    static navigationOptions = {
        tabBarLabel: '微信',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-text' : 'ios-text-outline'} size={24} color={tintColor}/>
        },
    };


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Tab 0</Text>
            </View>
        );
    }
}

export default Tab0