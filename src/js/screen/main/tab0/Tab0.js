import React from 'react';
import {
    Dimensions,
    FlatList, Image,
    StyleSheet,
    Text, TouchableHighlight,
    View
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

let data = [
    {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三12345678123412341234123412341234',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子我不是婊子我不是婊子我不是婊子我不是婊子我不是婊子我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: true,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是张三',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 1,
        notic: false,
    }, {
        icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
        nick: '我不是李四',
        lastMsg: '我不是婊子',
        time: '11:12',
        unread: 0,
        notic: true,
    },
];

class Tab0 extends React.Component {
    static navigationOptions = {
        tabBarLabel: '微信',
        tabBarIcon: ({focused, tintColor}) => {
            return <Icon name={focused ? 'ios-text' : 'ios-text-outline'} size={24} color={tintColor}/>
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            showHeader: true,
            data: data,
        }
    }

    render() {
        let header = this.state.showHeader ? <Header/> : null;
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <Item data={item} onPressItem={this._onPressItem}/>}
                    ItemSeparatorComponent={() => (<View style={Styles.line}/>)}
                    ListHeaderComponent={() => (header)}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }

    _keyExtractor = (item, index) => index + "";
    _onPressItem = (item) => {
        this.props.navigation.navigate('Tab1')
    }
}

class Header extends React.Component {
    render() {
        return (
            <View style={[Styles.item, {height: 48, backgroundColor: '#e0e0e0'}]}>

                <View style={[Styles.itemStart, {paddingRight: 0, paddingLeft: 0}]}>
                    <Image style={{
                        width: 32,
                        height: 32,
                    }} source={require('./computer.png')}/>
                </View>
                <Text style={Styles.itemLastMsg}>Windows微信已登录</Text>
            </View>
        )
    }
}

class Item extends React.Component {
    _onPress = () => {
        this.props.onPressItem(this.props.data);
        // console.log(this.props.data.nick)
    };

    render() {
        let unread = !this.props.data.notic && this.props.data.unread > 0 ? <View style={Styles.itemUnread}/> : null;
        let unreadCountWrapper = this.props.data.notic && this.props.data.unread > 0 ?
            <Text
                style={[Styles.itemUnreadCount, Styles.itemUnreadCountWrapper]}>{this.props.data.unread}</Text> : null;
        let noNotic = this.props.data.notic ? null : <Icon name={'md-notifications-off'} size={20} color={'gray'}/>;
        return (
            <TouchableHighlight onPress={this._onPress} underlayColor={'#ddd'} activeOpacity={1}>
                <View style={Styles.item}>
                    <View style={Styles.itemStart}>
                        <View style={Styles.itemIconWrapper}>
                            <Image style={Styles.itemIcon} source={this.props.data.icon}/>
                            {unread}
                            {unreadCountWrapper}
                        </View>
                    </View>

                    <View style={Styles.itemEnd}>
                        <View style={Styles.row}>
                            <Text style={Styles.itemNick} numberOfLines={1}
                                  ellipsizeMode='tail'>{this.props.data.nick}</Text>
                            <Text style={Styles.itemTime}>{this.props.data.time}</Text>
                        </View>
                        <View style={Styles.row}>
                            <Text style={Styles.itemLastMsg} numberOfLines={1}
                                  ellipsizeMode='tail'>{this.props.data.lastMsg}</Text>
                            <View style={{width: 40, height: 20, alignItems: 'flex-end',}}>
                                {noNotic}
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>

        );
    }
}

export default Tab0


const Styles = StyleSheet.create({
    line: {
        width: Dimensions.get('window').width,
        height: 0.5,
        backgroundColor: '#e0e0e0'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 65,
        paddingRight: 15,
    },
    itemStart: {
        width: 75,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 5,
    },
    itemIconWrapper: {
        width: 55,
        height: 55,
    },
    itemIcon: {
        width: 48,
        height: 48,
        backgroundColor: 'gray',
        position: 'absolute',
        top: 4,
    },
    itemUnread: {
        width: 10,
        height: 10,
        backgroundColor: 'tomato',
        position: 'absolute',
        left: 42,
        borderRadius: 5
    },
    itemUnreadCountWrapper: {
        width: 20,
        height: 20,
        backgroundColor: 'tomato',
        position: 'absolute',
        left: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    itemUnreadCount: {
        color: 'white',
        fontSize: 12,
        includeFontPadding: false,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    itemMsgCount: {
        position: 'absolute',
        backgroundColor: 'tomato',
        width: 45,
        height: 45,
        top: 2,
        left: 5,
    },
    itemEnd: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 90,
    },
    row: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 90,
        justifyContent: 'space-between',
    },
    itemNick: {
        color: 'black',
        fontSize: 14,
        padding: 1,
        width: Dimensions.get('window').width - 155,
    },
    itemLastMsg: {
        color: 'gray',
        fontSize: 12,
        padding: 1,
        width: Dimensions.get('window').width - 130,
    },
    itemTime: {
        fontSize: 10,
        color: '#b6b6b6',
        width: 65,
        textAlign: 'right'
    },
});