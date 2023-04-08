import { SafeAreaView, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Card from '../components/Card'

let homeUrl = 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
let listUrl = 'https://cdn-icons-png.flaticon.com/512/4394/4394562.png'
let clearUrl = 'https://cdn-icons-png.flaticon.com/512/2514/2514330.png'

export default class Main extends Component {

    state = {
        emptyList: []
    }

    getData = () => {
        fetch("https://randomuser.me/api/?results=50")
            .then(data => data.json())
            .then(getData => {
                this.setState({
                    emptyList: getData.results
                })
            })
    }

    clearData = () => {
        this.setState({
            emptyList: []
        })
    }

    render() {
        const { emptyList } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#B0C4DE' }}>

                <ScrollView style={{ flex: 1, marginTop: 10 }}>

                    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1, flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                            <Image
                                style=
                                {{ width: 50, height: 50 }}
                                source={{ uri: homeUrl }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.getData()}>
                            <Image style=
                                {{ width: 50, height: 50 }}
                                source={{ uri: listUrl }} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ padding: 20, borderRadius: 10 }}>

                        <View style={{ justifyContent: 'space-evenly' }}>


                            {emptyList.map((vals) => (
                                <Card
                                    nameMsg={vals.name.first}
                                    surnameMsg={vals.name.last}
                                    cityMsg={vals.location.city}
                                    countryMsg={vals.location.country + " | "}
                                    emailMsg={vals.email}
                                    imageMsg={vals.picture.large} />))}

                        </View>

                        <View style = {{justifyContent:'center', alignItems:'center', margin:10}}>

                            <TouchableOpacity onPress={this.clearData}>

                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: clearUrl }} />

                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}