import React, { Component } from 'React'
import { View, Text,Alert, StyleSheet } from 'react-native';

import CheckBox from 'react-native-check-box'

export default class TabView extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : '自定义标签',
          headerLeft: (
              <Text style={styles.navLeft} onPress={()=>Alert.alert('是否保存','是否需要保存修改',[{text:'是'},{text:'否'}])} >取消</Text>
          ),
          headerRight: (
                // <Image source={require('./res/img/star.png')} />
                <Text style={styles.navRight} onPress={()=>Alert.alert('1','1','ok','clena')} >保存</Text>
          ),
        }
    }

    state={
        checked: false
    }

    onClick=()=>{
        this.setState({
            checked: !this.state.checked
        })
    }
    componentDidMount(){
        console.log("storage: ", storage)
    }
    renderView=()=>{
        <View style={styles.container} > 
            <CheckBox 
                style={{flex: 1, padding: 10}}
                leftText="123123"
                isChecked={this.state.checked}
                onClick={()=>this.onClick()}
            />
            <CheckBox 
                style={{flex: 1, padding: 10}}
                leftText="2222"
                isChecked={this.state.checked}
                onClick={()=>this.onClick()}
            />
        </View>
    }
    getData=()=>{
        storage.load
    }
    render(){
        return (
            <View style={styles.container} > 
                <CheckBox 
                    style={{flex: 1, padding: 10}}
                    leftText="123123"
                    isChecked={this.state.checked}
                    onClick={()=>this.onClick()}
                />
                <CheckBox 
                    style={{flex: 1, padding: 10}}
                    leftText="2222"
                    isChecked={this.state.checked}
                    onClick={()=>this.onClick()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    navLeft: {
        marginLeft: 5,
        color: '#5f9df0',
        fontSize: 18
    },
    navRight: {
        marginRight: 5,
        color: '#5f9df0',
        fontSize: 18
    }
})