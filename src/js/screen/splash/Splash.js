import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native';

class Splash extends React.Component {
    static navigationOptions = {};

    componentDidMount() {
        this.skip = setTimeout(this.toMain, 2)
    }

    componentWillUnmount() {
        this.skip != null && clearTimeout(this.skip)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor='transparent'
                    barStyle='light-content'
                />
                <ImageBackground source={{uri: 'http://www.uc.cn/uploads/allimg/160607/25-16060G245190-L.jpg'}}
                                 style={styles.background}>
                    <Text style={[styles.skip]} onPress={this.toMain}>跳过</Text>

                    <Text style={[styles.hint, {color: 'white'}]}>广告</Text>
                </ImageBackground>
            </View>
        );
    }

    toMain = () => this.props.navigation.replace('Main')
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        background: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            paddingTop: 22,
            //不加这句，就是按照屏幕高度自适应
            //加上这几，就是按照屏幕自适应
            // resizeMode: Image.resizeMode.cover,
            //祛除内部元素的白色背景
            backgroundColor: 'rgba(0,0,0,0)',
        },
        skip: {
            fontSize: 14,
            paddingHorizontal: 15,
            paddingVertical: 5,
            color: '#ff7200',
            backgroundColor: "#0002",
            borderRadius: 15
        },
        hint: {
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 5,
            color: 'red'
        },
    }
);

export default Splash