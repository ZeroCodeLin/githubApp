import React from 'react';
import { Button, View, Text, Image, FlatList, TouchableHighlight, TouchableOpacity, Alert   } from 'react-native';
import { WingBlank, Flex } from 'antd-mobile'

import request from '../utils/request'


const data = [
    {key: 'one', full_name: 'test1',description:'1111111111111',owner:{login:'Zero',"avatar_url": "https://avatars3.githubusercontent.com/u/1645051?v=4",},stargazers_count: 33 },
    {key: 'two', full_name: 'test2',description:'2222222222222',owner:{login:'Zero',"avatar_url": "https://avatars3.githubusercontent.com/u/1645051?v=4",},stargazers_count: 33 },
    {key: 'three', full_name: 'test3',description:'3333333333333',owner:{login:'Zero',"avatar_url": "https://avatars3.githubusercontent.com/u/1645051?v=4",},stargazers_count: 33 },
    {key: 'four', full_name: 'test4',description:'4444444444444',owner:{login:'Zero',"avatar_url": "https://avatars3.githubusercontent.com/u/1645051?v=4",},stargazers_count: 33 },
]

export default class ListView extends React.Component {

    state={
        dataArray:[],
        refreshing: false
    }

    componentDidMount(){
        // Alert.alert('123');
        // this.loadGitHubTrending('https://github.com/trending');
        console.log(this.props.navigation)
        this.repositorySearch()
    }

    repositorySearch(url) {
        this.setState({
            refreshing: true
        })
        request('https://api.github.com/search/repositories?q=ios').then(data =>{
            console.log(1,data)
            this.setState({
                dataArray: data.items,
                refreshing: false
            })
        })
    }
    onRefresh=()=>{
        this.repositorySearch();
    }
    renderItem=({item})=>{
        return (
            <TouchableOpacity  onPress={()=>{this.props.navigation.push('HomeView')}}>
                <View style={styles.card} >
                    <View> 
                        <Text style={styles.title} >{item.full_name}</Text>
                    </View>
                    <View> 
                        <Text style={styles.description} >{item.description}</Text>
                    </View>
                    <View style={styles.footer} >
                        <View style={styles.author} >
                            <Text>Author：</Text>
                            <Image style={{width:16,height:16}}  source={{uri: item.owner.avatar_url}} /> 
                            <Text>  {item.owner.login}</Text>
                        </View>
                        <TouchableHighlight onPress={()=>{Alert.alert('like')}} >
                            <View style={styles.star} >
                                <Image source={require('../../res/img/star.png')} /> 
                                <Text>{item.stargazers_count}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>   
                </View>
            </TouchableOpacity >
        )
    }
    ListEmptyComponent=()=>{
        return (
            <View>
                <Text>暂无数据</Text>
            </View>
        )
    }
    render(){
        return (
            <WingBlank size="sm">
                {/* <Button onPress={this.repositorySearch} title='click' /> */}
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `key-${index}`}
                    
                    ItemSeparatorComponent={()=>{
                        return (
                            <View style={{height:5,backgroundColor:'#fff'}} ></View>
                        )
                    }}
                    ListEmptyComponent={this.ListEmptyComponent}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </WingBlank>
        )
    }
}

const styles = {
    card: {
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 20
    },
    description: {

    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center'
    },
}