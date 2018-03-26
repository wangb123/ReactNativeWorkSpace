import React from 'react';
import {
    StatusBar,
    Text,
    View
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Tab2 extends React.Component {

    static navigationOptions = {
        tabBarLabel: '共享社区',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-albums' : 'ios-albums-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar
                    translucent={true}
                    backgroundColor='transparent'
                    barStyle='dark-content'
                />
                <Text>Tab 2</Text>
            </View>
        );
    }
}

export default Tab2