import React from 'react';
import { Button, View, Text, Image, FlatList, TouchableHighlight, TouchableOpacity, Alert   } from 'react-native';
import { WingBlank, Tabs } from 'antd-mobile'

import request from '../utils/request'


export default class ListView extends React.Component {

    state={
        dataArray:[],
        refreshing: false
    }

    componentDidMount(){
        // request('https://github.com/login',{
        //     method: 'POST',
        //     body:{
        //         username: '540846207@qq.com',
        //         password: 'ly121207'
        //     }
        // }).then(data =>{
        //     console.log(data,'login')
        // })
    }

    render(){
        return (
            <View>
                <Text>sadsad</Text>
            </View>
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