import React from 'react';
import { Button, View, Text, Image, Alert, WebView } from 'react-native';

import { createStackNavigator  } from 'react-navigation'


export default class HomeView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : '首页',
        //   headerRight: (
        //     <Image source={require('./res/img/star.png')} />
        //   ),
        }
    }
    state={
        selectedTab: 'home'
    }
    render(){
        return (
                <WebView source={{uri: 'https://github.com/owncloud/ios'}}
                    style={{marginTop: 20}} />
        )
    }
}
