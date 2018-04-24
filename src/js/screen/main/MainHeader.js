import React from "react";
import {
    Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback,
    View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import MainMenu from "./MainMenu";
import ChatGroupCreate from "../chat/ChatGroupCreate";
import HelpAndFeedback from "../self/HelpAndFeedback";

class MainHeader extends React.Component {
    render() {
        return (
            <View>
                <StatusBar
                    translucent={false}
                    backgroundColor='#373a41'
                    barStyle='light-content'
                />
                <View style={styles.head}>
                    <Text style={{
                        color: 'white',
                        fontSize: 17,
                        paddingHorizontal: 12,
                        fontWeight: '400'
                    }}>{this.props.title}</Text>
                    <View style={styles.tool}>
                        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Search')}
                                                 background={TouchableNativeFeedback.SelectableBackground()}>
                            <View>
                                <Icon name={'md-search'} size={26} color='white'
                                      style={{paddingHorizontal: 12, paddingVertical: 10}}/>
                            </View>
                        </TouchableNativeFeedback>

                        <Menu renderer={MainMenu}>
                            <MenuTrigger>
                                <Icon name={'md-add'} size={26} color='white'
                                      style={{paddingHorizontal: 20, paddingVertical: 10}}/>
                            </MenuTrigger>
                            <MenuOptions customStyles={optionsStyles}>
                                <MenuOption onSelect={() => this.props.navigation.navigate('ChatGroupCreate')}>
                                    <MenuItemContent icon='ios-text' text='发起群聊'/>
                                </MenuOption>
                                <MenuOption onSelect={() => this.props.navigation.navigate('FriendCreate')}>
                                    <MenuItemContent icon='ios-person-add' text='添加朋友'/>
                                </MenuOption>
                                <MenuOption onSelect={() => this.props.navigation.navigate('QrScan')}>
                                    <MenuItemContent icon='ios-barcode' text='扫一扫'/>
                                </MenuOption>
                                <MenuOption onSelect={() => this.props.navigation.navigate('MoneyCode')}>
                                    <MenuItemContent icon='ios-filing' text='收付款'/>
                                </MenuOption>
                                <MenuOption onSelect={() => this.props.navigation.navigate('HelpAndFeedback')}>
                                    <MenuItemContent icon='ios-mail' text='帮助与反馈'/>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>

                    </View>
                </View>
            </View>
        );
    }
}

class MenuItem extends React.Component {
    _onSelect = () => {
        this.props.onSel();
    };

    render() {
        return (
            <MenuOption onSelect={this._onSelect()}>
                <MenuItemContent icon={this.props.icon} text={this.props.text}/>
            </MenuOption>
        )
    }
}

class MenuItemContent extends React.Component {
    render() {
        return (
            <View style={styles.optionContent}>
                <Icon name={this.props.icon} size={26} color='white' style={{
                    width: 26,
                    textAlignVertical: 'center',
                    textAlign: 'center'
                }}/>
                <Text style={{
                    color: 'white',
                    paddingHorizontal: 10,
                    fontSize: 14
                }}>{this.props.text}</Text>
            </View>)
    }
}

export default MainHeader

const styles = StyleSheet.create(
        {
            head: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#373a41',
                width: Dimensions.get('window').width,
            },
            tool: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: 48
            },
            optionContent: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 2,
                paddingHorizontal: 7,
            },
        }
    );

const
    optionsStyles = {
        optionsWrapper: {
            backgroundColor: '#373a41',
        },
        optionWrapper: {
            // backgroundColor: '#2f3239',
            // paddingVertical: 0.25,
            borderTopWidth: 0.25,
            borderColor: '#2e3138'
        },
        optionTouchable: {
            underlayColor: '#323136',
            activeOpacity: 1,
        },
        optionText: {
            color: 'brown',
        },
        OptionTouchableComponent: TouchableHighlight,
    };