import React from 'react';
import { Button, View, Text, Image, Alert } from 'react-native';
import { TabBar, Icon } from 'antd-mobile';
import { createStackNavigator  } from 'react-navigation'


import ListView from './js/ListView'

class App extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : '首页',
          headerRight: (
            <Image source={require('./res/img/home.png')} />
          ),
        }
    }
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
                            this.props.navigation.setParams({otherParam: '首页'})
                        }}
                    >
                        <View style={{backgroundColor:'red',height:'100%'}}>
                            
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        title="Trending"
                        key="trending"
                        icon={require('./res/img/trending.png')}
                        selectedIcon={require('./res/img/trending-selected.png')}
                        selected={this.state.selectedTab === 'trending'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'trending',
                            });
                            this.props.navigation.setParams({otherParam: 'Trending'})
                        }}
                    >
                        <View style={{backgroundColor:'red',height:'100%'}}>
                            <ListView />
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        title="我"
                        key="my"
                        icon={require('./res/img/like.png')}
                        selectedIcon={require('./res/img/like-selected.png')}
                        selected={this.state.selectedTab === 'like'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'like',
                            });
                            this.props.navigation.setParams({otherParam: 'like'})
                        }}
                    >
                        <View>
                            <Text>like</Text>
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        title="like"
                        key="my"
                        icon={require('./res/img/my.png')}
                        selectedIcon={require('./res/img/my-selected.png')}
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'my',
                            });
                            this.props.navigation.setParams({otherParam: '我'})
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

export default createStackNavigator({
    Home: {
        screen: App
    },
});

