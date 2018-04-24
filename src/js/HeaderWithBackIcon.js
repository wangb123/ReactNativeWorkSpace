import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class DefaultBackIcon extends React.Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                <View>
                    <Icon name={'md-arrow-back'} size={26} color='white'
                          style={[styles.backIcon, this.props.backIconStyle]}/>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class HeaderWithBackIcon extends React.Component {
    render() {

        let backIcon = this.props.backIconComponent;
        if (backIcon === undefined) {
            backIcon = <DefaultBackIcon navigation={this.props.navigation}/>;
        }
        return (
            <View>
                <StatusBar
                    translucent={false}
                    backgroundColor='#373a41'
                    barStyle='light-content'
                />
                <View style={[styles.wrapper, this.props.wrapperStyle]}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        {backIcon}
                        <View style={{width: 0.5, height: 30, backgroundColor: '#2e2e32'}}/>
                        <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
                    </View>
                    <View>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}


{/*<View>*/
}
{/*<TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}*/
}
{/*background={TouchableNativeFeedback.SelectableBackground()}>*/
}
{/*<View>*/
}
{/*<Icon name={'md-arrow-back'} size={26} color='white'*/
}
{/*style={[styles.backIcon, this.props.backIconStyle]}/>*/
}
{/*</View>*/
}
{/*</TouchableNativeFeedback>*/
}
{/*</View>*/
}

export default HeaderWithBackIcon

const styles = StyleSheet.create(
    {
        wrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#373a41',
            width: Dimensions.get('window').width,
        },
        backIcon: {
            width: 48,
            height: 48,
            textAlignVertical: 'center',
            textAlign: 'center'
        },
        title: {
            color: 'white',
            fontSize: 17,
            paddingHorizontal: 12,
            fontWeight: '400'
        },
    }
);
