import React from 'react';
import { Button, View, Text } from 'react-native';
import { TabBar } from 'antd-mobile';

import my from './res/img/my.png'

export default class App extends React.Component {
    state={
        selectedTab: 'home'
    }
    render() {
        return (
            <View style={{width:'100%',height:'100%'}} >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={require('./res/img/home.png')}
                        selectedIcon={require('./res/img/home-selected.png')}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'home',
                            });
                        }}
                    >
                        <View style={{backgroundColor:'red',height:'100%'}}>
                            <Text>home</Text>
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        title="我"
                        key="my"
                        icon={require('./res/img/my.png')}
                        selectedIcon={require('./res/img/my-selected.png')}
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'my',
                            });
                        }}
                    >
                        <View>
                            <Text>my</Text>
                        </View>
                    </TabBar.Item>
                </TabBar>
            </View>
        )
    }
}
