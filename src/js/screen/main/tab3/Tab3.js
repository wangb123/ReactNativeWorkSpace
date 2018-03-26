import React from 'react';
import {
    StatusBar,
    Text,
    View
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Tab3 extends React.Component {
    static navigationOptions = {
        tabBarLabel: '讲堂',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-analytics' : 'ios-analytics-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar
                    translucent={true}
                    backgroundColor='transparent'
                    barStyle='light-content'
                />
                <Text>Tab 3</Text>
            </View>
        );
    }
}

export default Tab3