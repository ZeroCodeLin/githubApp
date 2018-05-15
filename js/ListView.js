import React from 'react';
import { Button, View, Text, Image, FlatList } from 'react-native';

const data = [
    {title: 'test1',text:'1111111111111'},
    {title: 'test2',text:'2222222222222'},
    {title: 'test3',text:'3333333333333'},
    {title: 'test4',text:'4444444444444'},
]

export default class ListView extends React.Component {

    el=({item})=>{
        return (
            <View >
                <Text>{item.title}</Text>                    
                <Text>{item.text}</Text>                    
            </View>
        )
    }
    render(){
        return (
            <FlatList
                data={data}
                renderItem={({item}) => this.el({item})}
                ItemSeparatorComponent={()=>{
                    return (
                        <View style={{height:1,backgroundColor:'#fff'}} ></View>
                    )
                }}
            />
        )
    }
}