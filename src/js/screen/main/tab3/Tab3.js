import React from 'react';
import {
    StatusBar,
    Text,
    View
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Tab3 extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-person' : 'ios-person-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <Text>Tab 3</Text>
            </View>
        );
    }
}

export default Tab3