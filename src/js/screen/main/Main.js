// import React from 'react';
// import TabNavigator from "react-navigation/src/navigators/TabNavigator";
// import TabBarBottom from "react-navigation/src/views/TabView/TabBarBottom";
// import Tab0 from './tab0/Tab0'
// import Tab1 from './tab1/Tab1'
// import Tab2 from './tab2/Tab2'
// import Tab3 from './tab3/Tab3'
// import Tab4 from './tab4/Tab4'
// import Icon from "react-native-vector-icons/Ionicons";
//
// const Main = TabNavigator(
//     {
//         Tab0: {
//             screen: Tab0,
//             navigationOptions: {tabBarLabel: '孕育',},
//         },
//         Tab1: {
//             screen: Tab1,
//             navigationOptions: {tabBarLabel: '圈子'},
//         },
//         Tab2: {
//             screen: Tab2,
//             navigationOptions: {tabBarLabel: '共享社区'},
//         },
//         Tab3: {
//             screen: Tab3,
//             navigationOptions: {tabBarLabel: '讲堂'},
//         },
//         Tab4: {
//             screen: Tab4,
//             navigationOptions: {tabBarLabel: '我的'},
//         },
//     },
//     {
//         navigationOptions: ({navigation}) => ({
//             tabBarIcon: ({focused, tintColor}) => {
//                 const {routeName} = navigation.state;
//                 let iconName;
//                 switch (routeName) {
//                     case "Tab0":
//                         iconName = `md-home`;
//                         break;
//                     case "Tab1":
//                         iconName = `md-home`;
//                         break;
//                     case "Tab2":
//                         iconName = `md-home`;
//                         break;
//                     case "Tab3":
//                         iconName = `md-home`;
//                         break;
//                     case "Tab4":
//                         iconName = `md-home`;
//                         break;
//                 }
//                 return <Icon name={iconName} size={24} color={tintColor}/>
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//             size: 14
//         },
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         animationEnabled: true,
//         swipeEnabled: true,
//         lazy: true,
//         removeClippedSubviews: true,
//     }
// );
// export default Main


import React from 'react';
import TabNavigator from "react-navigation/src/navigators/TabNavigator";
import TabBarBottom from "react-navigation/src/views/TabView/TabBarBottom";
import Tab0 from './tab0/Tab0'
import Tab1 from './tab1/Tab1'
import Tab2 from './tab2/Tab2'
import Tab3 from './tab3/Tab3'
import Tab4 from './tab4/Tab4'
import Icon from "react-native-vector-icons/Ionicons";

// const TabIcon = ['ios-home-outline', 'ios-cloud-circle-outline', 'ios-albums-outline', 'ios-analytics-outline', 'ios-person-outline'];
// const TabIconFocused = ['ios-home', 'ios-cloud-circle', 'ios-albums', 'ios-analytics', 'ios-person'];

const Main = TabNavigator(
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
        Tab4: {
            screen: Tab4,
            // navigationOptions: {
            //     tabBarLabel: '我的',
            // },
        },
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
        removeClippedSubviews: true,
        tabsConfig: {
            backBehavior: 'none'
        },

        onNavigationStateChange : (navigation) => {
            console.log('切换：' + navigation.state);
        },
    }
);
export default Main