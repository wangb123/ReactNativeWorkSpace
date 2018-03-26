import React from 'react';
import {
    StatusBar, StyleSheet,
    Text,
    View
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

class Tab1 extends React.Component {
    static navigationOptions = {
        tabBarLabel: '通讯录',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-contacts' : 'ios-contacts-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={styles.container}>

                <Text>Tab 1</Text>
            </View>
        );
    }
}

export default Tab1

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    }
);
