import React from 'react';
import {
    Dimensions,
    Image, PixelRatio,
    StatusBar, StyleSheet,
    Text, TouchableHighlight,
    View
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import FriendList from "../../friend/FriendList";

const line = <View style={{
    height: 1 / PixelRatio.get(),
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
}}/>;

class Tab1 extends React.Component {
    static navigationOptions = {
        tabBarLabel: '通讯录',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-contacts' : 'ios-contacts-outline'} size={24} color={tintColor}/>
        },
    };

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <FriendList ListHeaderComponent={<Header nav={this.props.nav}/>}
                            showSelectIcon={false}
                            onPressItem={this._onPressItem}/>
            </View>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <HeaderItem icon='ios-person-add' text='新的朋友' iconBackgroundColor='#fa9d3b'/>
                {line}
                <HeaderItem icon='ios-people' text='群聊' iconBackgroundColor='#45c01a'/>
                {line}
                <HeaderItem icon='ios-pricetag' text='标签' iconBackgroundColor='#2782d7'/>
                {line}
                <HeaderItem icon='md-contacts' text='公众号' iconBackgroundColor='#2782d7'/>

            </View>
        )
    }
}

class HeaderItem extends React.Component {
    _onPress = () => {
        if (this.props.onPressItem !== undefined) {
            this.props.onPressItem(this.props.data, !this.state.selected);
        }
    };

    render() {
        return (
            <TouchableHighlight onPress={this._onPress} underlayColor={'#ddd'} activeOpacity={1}
                                style={{backgroundColor: 'white'}}>
                <View style={{
                    flex: 1,
                    height: 48,
                    flexDirection: 'row',
                    paddingHorizontal: 13,
                    alignItems: 'center'
                }}>
                    <Icon style={{
                        width: 36,
                        height: 36,
                        marginRight: 8,
                        textAlignVertical: 'center',
                        textAlign: 'center',
                        backgroundColor: this.props.iconBackgroundColor,
                    }} name={this.props.icon} size={24} color={'white'}/>
                    <Text style={{
                        width: Dimensions.get('window').width - 110,
                        padding: 4,
                        fontSize: 14,
                        color: '#353535'
                    }}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}


class Box extends React.Component {
    render() {
        return (
            <View style={[BoxStyles.box, BoxStyles[this.props.width], BoxStyles[this.props.height]]}>
                <View style={[BoxStyles.top, BoxStyles.height50, BoxStyles[this.props.classBg]]}><Text>top</Text></View>
                <View style={[BoxStyles[this.props.childName]]}>
                    <View style={[BoxStyles.left, BoxStyles[this.props.classBg]]}><Text>left</Text></View>
                    {this.props.children}
                    <View style={[BoxStyles.right, BoxStyles[this.props.classBg]]}><Text>right</Text></View>
                </View>
                <View style={[BoxStyles.bottom, BoxStyles.height50, BoxStyles[this.props.classBg]]}><Text>bottom</Text></View>
                <View style={[BoxStyles.label]}><Text>{this.props.boxName}</Text></View>
            </View>
        )
    }
}

class MargginBox extends React.Component {
    render() {
        return (
            <View style={[BoxStyles.margginBox]}>
                <Box childName="borderBox" height="height400" width="width400" boxName="margin"
                     classBg="bgred">{this.props.children}</Box>
            </View>
        )
    }

}


class BorderBox extends React.Component {
    render() {
        return (
            <Box childName="paddingBox" height="height300" width="width300" boxName="border"
                 classBg="bggreen">{this.props.children}</Box>
        )
    }

}


class PaddingBox extends React.Component {
    render() {
        return (
            <Box childName="elementBox" height="height200" width="width200" boxName="padding"
                 classBg="bgyellow">{this.props.children}</Box>
        )
    }
}


class ElementBox extends React.Component {
    render() {
        return (
            <View style={[BoxStyles.box, BoxStyles.height100]}>
                <View style={[BoxStyles.measureBox]}>
                    <View style={[BoxStyles.right]}><Text>height</Text></View>
                </View>
                <View style={[BoxStyles.bottom, BoxStyles.height50]}><Text>width</Text></View>
                <View style={[BoxStyles.label]}><Text>element</Text></View>
                <View style={[BoxStyles.widthdashed]}></View>
                <View style={[BoxStyles.heightdashed]}></View>
            </View>
        )
    }
}

class DongFang extends React.Component {
    render() {
        return (
            <MargginBox>
                <BorderBox>
                    <PaddingBox>
                        <ElementBox>
                        </ElementBox>
                    </PaddingBox>
                </BorderBox>
            </MargginBox>
        )
    }
}

const BoxStyles = StyleSheet.create({
    height50: {
        height: 50,
    },
    height400: {
        height: 400,
    },
    height300: {
        height: 300,
    },
    height200: {
        height: 200,
    },
    height100: {
        height: 100,
    },
    width400: {
        width: 400,
    },
    width300: {
        width: 300,
    },
    width200: {
        width: 200,
    },
    width100: {
        width: 100,
    },
    bgred: {
        backgroundColor: '#6AC5AC',
    },
    bggreen: {
        backgroundColor: '#414142',
    },
    bgyellow: {
        backgroundColor: '#D64078',
    },
    box: {
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
    },
    label: {
        top: 0,
        left: 0,
        paddingTop: 0,
        paddingRight: 3,
        paddingBottom: 3,
        paddingLeft: 0,
        position: 'absolute',
        backgroundColor: '#FDC72F',
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        width: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    left: {
        width: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    heightdashed: {
        bottom: 0,
        top: 0,
        right: 20,
        borderLeftWidth: 1,
        position: 'absolute',
        borderLeftColor: '#FDC72F',
    },
    widthdashed: {
        bottom: 25,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        position: 'absolute',
        borderTopColor: '#FDC72F',
    },
    yellow: {
        color: '#FDC72F',
        fontWeight: '900',
    },
    white: {
        color: 'white',
        fontWeight: '900',
    },
    margginBox: {
        position: 'absolute',
        top: 100,
        paddingLeft: 7,
        paddingRight: 7,
    },
    borderBox: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    paddingBox: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    elementBox: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    measureBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Tab1

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    }
);
