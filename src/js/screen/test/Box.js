import React from 'react';
import {
    StyleSheet,
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
                <Box1><Box2><Box3><Box4/></Box3></Box2></Box1>
            </View>
        );
    }
}

class Box extends React.Component {
    render() {
        return (
            <View style={[BoxStyles.box, {
                backgroundColor: this.props.bgColor,
                width: this.props.width,
                height: this.props.height,
            }]}>

                <View style={BoxStyles.name}>
                    <Text>{this.props.name}</Text>
                </View>

                <View style={BoxStyles.top}>
                    <Text>Top</Text>
                </View>

                <View style={BoxStyles.center}>
                    <View style={BoxStyles.left}>
                        <Text>Left</Text>
                    </View>
                    {this.props.children}
                    <View style={BoxStyles.right}>
                        <Text>Right</Text>
                    </View>
                </View>

                <View style={BoxStyles.bottom}>
                    <Text>Bottom</Text>
                </View>

            </View>
        );
    }
}

class Box1 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Box bgColor='red' width={400} height={400} name={'Box1'}>
                    {this.props.children}
                </Box>
            </View>
        );
    }
}

class Box2 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Box bgColor='blue' width={300} height={300} name={'Box2'}>
                    {this.props.children}
                </Box>
            </View>
        );
    }
}

class Box3 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Box bgColor='yellow' width={200} height={200} name={'Box3'}>
                    {this.props.children}
                </Box>
            </View>
        );
    }
}

class Box4 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Box bgColor='green' width={100} height={100} name={'Box4'}>
                    {this.props.children}
                </Box>
            </View>
        );
    }
}

export default Tab0

const BoxStyles = StyleSheet.create({
    box: {
        flexDirection: 'column',
    },
    top: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    left: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        position: 'absolute',
        backgroundColor: '#FDC72F',
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
});