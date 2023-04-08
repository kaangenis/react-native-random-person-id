import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { nameMsg, surnameMsg, cityMsg, countryMsg, emailMsg, imageMsg } = this.props
        return (

            <View style={{ 
                flexDirection:'row',
                backgroundColor: '#333333',
                borderRadius: 10,
                padding: 10,
                marginVertical:10
                }}>

                <Image style = {{width:100, height:100, borderRadius:50}} source={{uri:this.props.imageMsg}}/>


                <View style = {{flexDirection:'column', flex: 1, padding:10}}>

                    <Text style={{ fontSize: 20, fontWeight:'600', color: 'white' }}>{this.props.nameMsg} {this.props.surnameMsg}</Text>
                    <Text style={{ fontSize: 16, color: 'white' }}>{this.props.emailMsg}</Text>
                    <Text style={{ fontSize: 16, color: 'white' }}>{this.props.countryMsg}{this.props.cityMsg}</Text>

                </View>

            </View>

        )
    }
}