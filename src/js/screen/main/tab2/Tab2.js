import React from 'react';
import {
    StatusBar,
    Text,
    View
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Tab2 extends React.Component {

    static navigationOptions = {
        tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-compass' : 'ios-compass-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <Text>Tab 2</Text>
            </View>
        );
    }
}

export default Tab2