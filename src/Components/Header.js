import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default class Header extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.header}>{this.props.headerText}</Text>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'red',
        justifyContent:'center',
        height:60,
        paddingTop:10,
        shadowColor:'#fff',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    header:{
        fontSize:20,
        textAlign:'center',
        color:'white'
    }
})