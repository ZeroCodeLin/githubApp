import React from 'react';
import { Button, View, Text, Image, FlatList } from 'react-native';
import { WingBlank } from 'antd-mobile'

import request from '../utils/request'

import GitHubTrending from 'GitHubTrending'
const data = [
    {key: 'one', fullName: 'test1',starCount:'1111111111111'},
    {key: 'two', fullName: 'test2',starCount:'2222222222222'},
    {key: 'three', fullName: 'test3',starCount:'3333333333333'},
    {key: 'four', fullName: 'test4',starCount:'4444444444444'},
]

export default class ListView extends React.Component {

    state={
        dataArray:[],
        refreshing: false
    }

    componentDidMount(){
        // Alert.alert('123');
        // this.loadGitHubTrending('https://github.com/trending');
    }

    repositorySearch(url) {
        request('https://api.github.com/search/repositories?q=ios').then(data =>{
            console.log(1,data)
        })
        // fetch('https://api.github.com/search/repositories?q=ios')
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(responseJson)
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    }

    el=({item, index})=>{
        return (
            <View style={styles.card} key={`key-${index}`} >
                <Text style={styles.title} >{item.fullName}</Text>                    
                <Text >一个用于显示文本的React组件，并且它也支持嵌套、样式，以及触摸处理。在下面的例子里，嵌套的标题和正文文字会继承来自styles.baseText的fontFamily字体样式，不过标题上还附加了它自己额外的样式。标题和文本会在顶部依次堆叠，并且被代码中内嵌的换行符分隔开。</Text>                    
                <View style={{justifyContent: 'flex-end'}} >
                    <Text >{item.starCount}</Text>     
                </View>                   
            </View>
        )
    }
    render(){
        return (
            <WingBlank size="sm">
                {/* <Button onPress={this.repositorySearch} title='click' /> */}
                <FlatList
                    data={data}
                    renderItem={({item, index}) => this.el({item, index})}
                    keyExtractor={(item, index) => `key-${index}`}
                    
                    ItemSeparatorComponent={()=>{
                        return (
                            <View style={{height:5,backgroundColor:'#fff'}} ></View>
                        )
                    }}
                    ListHeaderComponent={()=>{
                        return <Text>下拉刷新</Text>
                    }}
                    refreshing={this.state.refreshing}
                    onRefresh={()=>{
                        this.setState({
                            refreshing: true
                        })
                        console.log('刷新')
                        setTimeout(()=>{
                            this.setState({
                                refreshing: false
                            })
                        },5000)
                    }}
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
    },
    title: {
        fontSize: 20
    }
}