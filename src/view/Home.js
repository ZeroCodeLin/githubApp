import React from 'react';
import { Button, View, Text, Image, FlatList } from 'react-native';

import GitHubTrending from 'GitHubTrending'
const data = [
    {title: 'test1',text:'1111111111111'},
    {title: 'test2',text:'2222222222222'},
    {title: 'test3',text:'3333333333333'},
    {title: 'test4',text:'4444444444444'},
]

export default class ListView extends React.Component {

    state={
        dataArray:[]
    }

    componentDidMount(){
        // Alert.alert('123');
        // this.loadGitHubTrending('https://github.com/trending');
    }

    repositorySearch(url) {
        fetch('https://api.github.com/search/repositories?q=ios')
        .then(data =>{
            console.log(data)
        })
        .catch(error =>{

        })
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
            <View>
                <Button onPress={this.repositorySearch} title='click' />
            </View>
            // <FlatList
            //     data={this.state.dataArray}
            //     renderItem={({item}) => this.el({item})}
            //     ItemSeparatorComponent={()=>{
            //         return (
            //             <View style={{height:1,backgroundColor:'#fff'}} ></View>
            //         )
            //     }}
            // />
        )
    }
}