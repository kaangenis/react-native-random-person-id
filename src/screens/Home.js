import { Button, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        let iconUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:'#FFE4C4' }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

                    <Text style={{ fontSize: 32, fontWeight:'200' }}>Random People Generator</Text>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>

                        <Image style={{ width: 100, height: 100 }} source={{ uri: iconUrl }} />

                    </TouchableOpacity>


                </View>

            </SafeAreaView>
        )
    }
}