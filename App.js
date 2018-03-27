/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StackNavigator} from 'react-navigation';

import Splash from './src/js/screen/splash/Splash'
import Main from './src/js/screen/main/Main'
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";
import Search from "./src/js/screen/search/Search";

export default class MyApp extends React.Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }


    onBackAndroid = () => {
        console.log(this.props);
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            return false
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show("再按一次退出应用" + page, ToastAndroid.SHORT);
        return true
    }

    render() {
        return (
            <MyStack/>
        );
    }
}


// 定义一个路由作为入口，里面有开屏页和首页
const MyStack = StackNavigator({
    Splash: {
        screen: Splash
    },
    Main: {
        screen: Main
    },
    Search: {
        screen: Search
    },
}, {
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
    //样式
    // cardStyle: {},
    // 页面切换结束时的回调函数
    onTransitionStart: (navigation) => {
        console.log('导航开始：' + navigation.state);
        page++;
    },
    //页面切换结束时的回调函数
    onTransitionEnd: (navigation) => {
        console.log('导航结束：' + navigation.state);
        page--;
    },
});

let page = 0;