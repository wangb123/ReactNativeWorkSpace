import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

class ClientState extends React.Component {
    static navigationOptions = {
        title: 'ClientState',
    };

    constructor(props) {
        super(props)
        this.state = {
            silent: true,
        }
    }

    render() {
        const silent = this.state.silent ? <Image style={style.noMsg} source={require('./no_msg.png')}/> : null;
        return (
            <View style={style.container}>

                <View>
                    <TouchableHighlight style={{
                        width: 65,
                        height: 48,
                    }} onPress={this._finish} underlayColor={'#ddd'}>
                        <Text style={[style.finish, style.textCenter]}>
                            关闭
                        </Text>
                    </TouchableHighlight>

                    <View style={style.computerWrapper}>
                        <Image style={style.computer} source={require('./computer.png')}/>
                        {silent}
                    </View>

                    <Text style={[{
                        color: '#272727',
                        fontSize: 14, marginTop: 20
                    }, style.textCenter]}>Windows
                        微信已登录</Text>

                    <Text style={[{
                        color: '#8e8d92',
                        fontSize: 12,
                        marginTop: 7
                    }, style.textCenter]}>如果不是本人操作，可以立即退出</Text>

                    <View style={{
                        marginTop: 55,
                        flexDirection: 'row',
                        alignSelf: 'center'
                    }}>
                        <View style={style.actionWrapper}>
                            <TouchableHighlight onPress={this._silent} underlayColor='white' style={style.actionIcon}>
                                <Icon name={'ios-notifications-off-outline'} size={24}
                                      color={this.state.silent ? '#3cbc4f' : '#a8a7ac'}/>
                            </TouchableHighlight>

                            <Text style={[{
                                color: '#8e8d92',
                                fontSize: 10,
                            }, style.textCenter]}>手机静音</Text>
                        </View>
                        <View style={style.actionWrapper}>
                            <TouchableHighlight onPress={this._file} underlayColor='white' style={style.actionIcon}>
                                <Icon name={'ios-folder-outline'} size={24}
                                      color={'#a8a7ac'}/>
                            </TouchableHighlight>

                            <Text style={[{
                                color: '#8e8d92',
                                fontSize: 10,
                            }, style.textCenter]}>传文件</Text>
                        </View>

                    </View>

                </View>

                <Text style={style.actionLogoutClient} onPress={this._finish}>
                    退出Windows微信
                </Text>
            </View>
        );
    }

    _finish = () => {
        this.props.navigation.goBack();
    };
    _file = () => {
        this.props.navigation.replace('Chat');
    };
    _silent = () => {
        this.setState(
            {
                silent: !this.state.silent,
            }
        )
    }
}

export default ClientState

const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#efeef3',
    },
    finish: {
        color: '#17a90a',
        width: 65,
        height: 48,
        fontSize: 16,
    },
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    computer: {
        width: 374 / 3,
        height: 288 / 3,
        alignSelf: 'center'
    },
    noMsg: {
        width: 35,
        top: 116,
        left: 120,
        height: 190 / 3,
        position: 'absolute'
    },
    computerWrapper: {
        flexDirection: 'column-reverse',
        width: 150,
        height: 180,
        alignSelf: 'center'
    },
    actionWrapper: {
        width: 54,
        height: 75,
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    actionIcon: {
        width: 54,
        height: 54,
        backgroundColor: '#f7f6fb',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionLogoutClient: {
        width: 160,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#17a90a',
        fontSize: 14,
        borderRadius: 2,
        borderColor: '#17a90a',
        borderWidth: 1,
        alignSelf: 'center',
        marginBottom: 40,
    }
});