import React, { Component } from 'React'
import { View, Text,Alert,CheckBox } from 'react-native';

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

    render(){
        return (
            <View>
                <CheckBox value="java" />
                <Text>123</Text>
            </View>
        )
    }
}

const styles ={
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
}