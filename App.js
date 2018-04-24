/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Easing,
    Animated,
} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Splash from './src/js/screen/splash/Splash'
import Main from './src/js/screen/main/Main'
import Search from "./src/js/screen/search/Search";
import Chat from "./src/js/screen/chat/Chat";
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";
import {MenuProvider} from "react-native-popup-menu";
import ChatGroupCreate from "./src/js/screen/chat/ChatGroupCreate";
import FriendCreate from "./src/js/screen/friend/FriendCreate";
import QrScan from "./src/js/screen/scan/QrScan";
import MoneyCode from "./src/js/screen/money/MoneyCode";
import HelpAndFeedback from "./src/js/screen/self/HelpAndFeedback";
import ClientState from "./src/js/screen/other/ClientState";

export default class MyApp extends React.Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        return false;
        // if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //     return false
        // }
        // this.lastBackPressed = Date.now();
        // ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
        // return true
    };

    render() {
        return (
            <MenuProvider style={{flex: 1}}>
                <MyStack/>
            </MenuProvider>
        );
    }
}

//实现定义某个页面的动画效果
const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.linear(),
            timing: Animated.timing,
        },
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        // screenInterpolator:freeStyle,
    };
};


const router = {
    Search: {
        screen: Search
    },
    Chat: {
        screen: Chat
    },
    ChatGroupCreate: {
        screen: ChatGroupCreate
    },
    FriendCreate: {
        screen: FriendCreate
    },
    QrScan: {
        screen: QrScan
    },
    MoneyCode: {
        screen: MoneyCode
    },
    HelpAndFeedback: {
        screen: HelpAndFeedback
    },
    ClientState: {
        screen: ClientState
    }
};


// 定义一个路由作为入口，里面有开屏页和首页
const MyStack = StackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Main: {
            screen: Main
        },
        ...router,
    },
    {
        //设置默认的页面组件，必须是上面已注册的页面组件
        // initialRouteKey: Splash,
        //初始路由的参数
        initialRouteParams: {author: 'WBing'},
        //屏幕导航的默认选项
        navigationOptions: {
            //导航栏的标题
            title: 'tit',
            //导航栏设置对象, header:null的时候没有，不设置默认使用系统的toolbar
            // header: (<Text>header</Text>),
            header: null,
            //导航栏的标题, 可以是字符串也可以是个组件，这个东西优先于title显示（Android）
            // headerTitle: 'head_tit',
            // 左上角的返回键文字, 默认是上一个页面的title，设置这个属性会覆盖掉title的值(但是好像没什么卵用)
            // headerBackTitle: 'back_tit',
            // 导航栏右按钮
            // headerRight: (<Text>Right</Text>),
            //导航栏左按钮
            // headerLeft: (<Text>Left</Text>),
            // 导航栏的style
            // headerStyle: {backgroundColor: "#fff",},
            //导航栏的title的style
            // headerTitleStyle: {textColor: "#f00",},
            //返回按钮的颜色
            // headerTintColor: '#999',
            //按压返回按钮显示的颜色 安卓系统 >= 5.0才有效。
            headerPressColorAndroid: false,
            //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
            gesturesEnabled: true
        },
        //RouteConfigs里面路径设置的映射
        // paths: {},
        //页面切换模式:card: 普通app常用的左右切换；modal: 上下切换
        mode: "card",
        //导航栏的显示模式:float: 无透明效果, 默认；screen: 有渐变透明效果, 如微信QQ的一样；none: 隐藏导航栏
        headerMode: "screen",
        transitionConfig: TransitionConfiguration,
        //样式
        // cardStyle: {},
        // 页面切换结束时的回调函数
        onTransitionStart: (navigation) => {
            console.log('导航开始：' + navigation);
        },
        //页面切换结束时的回调函数
        onTransitionEnd: (navigation) => {
            console.log('导航结束：' + navigation);
        },
    }
);