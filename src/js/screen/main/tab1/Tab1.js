import React from 'react';
import {
    StatusBar, StyleSheet,
    Text,
    View
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

class Tab1 extends React.Component {
    static navigationOptions = {
        tabBarLabel: '圈子',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-cloud-circle' : 'ios-cloud-circle-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor='transparent'
                    barStyle='light-content'
                />
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
