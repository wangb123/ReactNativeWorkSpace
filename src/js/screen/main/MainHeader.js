import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class MainHeader extends React.Component {
    render() {
        return (
            <View>
                <StatusBar
                    translucent={false}
                    backgroundColor='#383838'
                    barStyle='light-content'
                />
                <View style={styles.head}>
                    <Text style={{color: 'white', fontSize: 17, paddingHorizontal: 12, fontWeight: '400'}}>微信</Text>
                    <View style={styles.tool}>
                        <Icon name={'md-search'} size={26} color='white'
                              style={{paddingHorizontal: 12, paddingVertical: 10}}/>
                        <Icon name={'md-add'} size={26} color='white'
                              style={{paddingHorizontal: 20, paddingVertical: 10}}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default MainHeader


const styles = StyleSheet.create(
    {
        head: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#383838',
            width: 360
        },
        tool: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 48
        },
    }
);