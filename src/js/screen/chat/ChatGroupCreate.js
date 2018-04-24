import React from 'react';
import {Text, TouchableHighlight, StyleSheet, View, Button, PixelRatio} from "react-native";
import HeaderWithBackIcon from "../../HeaderWithBackIcon";
import FriendList from "../friend/FriendList";

class ChatGroupCreate extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <HeaderWithBackIcon title='发起群聊' navigation={navigation}>
                <MyButton text={navigation.getParam('text', '确定')}
                          disabled={navigation.getParam('count', 0) === 0}/>
            </HeaderWithBackIcon>
        )
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FriendList ListHeaderComponent={<Header/>}
                            showSelectIcon={true}
                            onPressItem={this._onPressItem}/>
            </View>
        )
    }

    // render() {
    //     return (
    //         <View>
    //             <Button title='add' onPress={() => {
    //                 let count = this.props.navigation.getParam("count", 0);
    //                 count++;
    //                 this._resetEnsure(count);
    //             }}/>
    //             <Button title='sub' onPress={() => {
    //                 let count = this.props.navigation.getParam("count", 0);
    //                 if (count === 0) {
    //                     return
    //                 }
    //                 count--;
    //                 this._resetEnsure(count);
    //             }}/>
    //         </View>
    //     );
    // }

    _onPressItem = (data, select) => {
        // let count = this.props.navigation.getParam("count", 0);
        // this._resetEnsure(select ? ++count : --count);
    };

    _resetEnsure = count => {
        this.props.navigation.setParams(
            {
                count: count,
                text: count !== 0 ? `确定(${count})` : '确定',
            }
        )
    }
}

class MyButton extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const buttonColor = this.props.disabled ? styles.buttonColorDisabled : styles.buttonColorEnable;
        return (
            <TouchableHighlight style={[styles.margin10, styles.buttonXY]}
                                disabled={this.props.disabled}
                                onPress={this._onPress}>
                <Text style={[styles.buttonXY, styles.buttonText, buttonColor]}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        )
    }

    _onPress = () => {
        alert("点击了确定")
    };
}

class Header extends React.Component {


    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={{height: 65,}}/>
                <TouchableHighlight onPress={this._onPress} underlayColor={'#ddd'} activeOpacity={1}>
                    <Text style={{
                        height: 52,
                        textAlignVertical: 'center',
                        fontSize: 14,
                        color: '#353535',
                        paddingHorizontal: 12
                    }}>选择一个群</Text>
                </TouchableHighlight>
                <View style={{
                    height: 1 / PixelRatio.get(),
                    backgroundColor: '#e0e0e0',
                    marginHorizontal: 12,
                }}/>
                <TouchableHighlight onPress={this._onPress} underlayColor={'#ddd'} activeOpacity={1}>
                    <Text style={{
                        height: 52,
                        textAlignVertical: 'center',
                        fontSize: 14,
                        color: '#353535',
                        paddingHorizontal: 12
                    }}>面对面建群</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default ChatGroupCreate

const styles = StyleSheet.create(
    {
        margin10: {
            margin: 10,
        },
        buttonXY: {
            height: 28,
            width: 60,
            borderRadius: 3,
        },
        buttonText: {
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 12,
        },
        buttonColorEnable: {
            backgroundColor: '#1aac19',
            color: 'white',
        },
        buttonColorDisabled: {
            backgroundColor: '#2d6830',
            color: '#6c956e',
        },
        container: {
            flex: 1,
        },
    }
);