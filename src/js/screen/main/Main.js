import React from 'react';
import Tab0 from './tab0/Tab0'
import Tab1 from './tab1/Tab1'
import Tab2 from './tab2/Tab2'
import Tab3 from './tab3/Tab3'
import {TabBarBottom, TabNavigator} from "react-navigation";
import MainHeader from "./MainHeader";
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";

const MainNavigator = TabNavigator(
    {
        Tab0: {
            screen: Tab0,
            // navigationOptions: {
            //     tabBarLabel: '孕育',
            // },
        },
        Tab1: {
            screen: Tab1,
            // navigationOptions: {
            //     tabBarLabel: '圈子',
            // },
        },
        Tab2: {
            screen: Tab2,
            // navigationOptions: {
            //     tabBarLabel: '共享社区',
            // },
        },
        Tab3: {
            screen: Tab3,
            // navigationOptions: {
            //     tabBarLabel: '讲堂',
            // },
        },
        // Tab4: {
        //     screen: Tab4,
        //     // navigationOptions: {
        //     //     tabBarLabel: '我的',
        //     // },
        // },
    },
    {
        // navigationOptions: ({navigation}) => ({
        //     tabBarIcon: ({focused, tintColor}) => {
        //         const {routeName} = navigation.state;
        //         let iconName;
        //         let tabIcon = focused ? TabIconFocused : TabIcon;
        //         switch (routeName) {
        //             case "Tab0":
        //                 iconName = tabIcon[0];
        //                 break;
        //             case "Tab1":
        //                 iconName = tabIcon[1];
        //                 break;
        //             case "Tab2":
        //                 iconName = tabIcon[2];
        //                 break;
        //             case "Tab3":
        //                 iconName = tabIcon[3];
        //                 break;
        //             case "Tab4":
        //                 iconName = tabIcon[4];
        //                 break;
        //         }
        //         return <Icon name={iconName} size={24} color={tintColor}/>
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: 'mediumseagreen',
            inactiveTintColor: 'gray',
            labelStyle: {fontSize: 12},
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true,
        lazy: true,
        backBehavior: 'none',
        removeClippedSubviews: true,
    }
);

class MainComponent extends React.Component {
    static navigationOptions = {
        title: '微信',
        header: (<MainHeader/>)
    };


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }


    onBackAndroid = () => {
        // if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //     return false
        // }
        // this.lastBackPressed = Date.now();
        this.props.navigation.navigate("Splash");
        ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
        return true
    }

    render() {
        return (
            <MainNavigator/>
        );
    }
}


export default MainComponent

