import React from 'react';
import { Button, View, Text, Image, FlatList } from 'react-native';

import GitHubTrending from 'GitHubTrending'
const data = [
    {fullName: 'test1',starCount:'1111111111111'},
    {fullName: 'test2',starCount:'2222222222222'},
    {fullName: 'test3',starCount:'3333333333333'},
    {fullName: 'test4',starCount:'4444444444444'},
]

export default class ListView extends React.Component {

    state={
        dataArray:[]
    }

    componentDidMount(){
        // Alert.alert('123');
        // this.loadGitHubTrending('https://github.com/trending');
    }

    loadGitHubTrending(url) {
        new GitHubTrending().fetchTrending(url)
            .then((data) => {
                this.setState({
                    dataArray: data,
                })
                // Alert.alert(JSON.stringify(data));
                console.log(data)
            }).catch((error) => {
            this.setState({
                result: "failure",
            })
        });
    }

    el=({item})=>{
        return (
            <View >
                <Text>{item.fullName}</Text>                    
                <Text>{item.starCount}</Text>                    
            </View>
        )
    }
    render(){
        return (
            <FlatList
                // data={this.state.dataArray}
                data={data}
                renderItem={({item}) => this.el({item})}
                keyExtractor={(item, index) => `key-${index}`}                
                ItemSeparatorComponent={()=>{
                    return (
                        <View style={{height:1,backgroundColor:'#fff'}} ></View>
                    )
                }}
            />
        )
    }
}