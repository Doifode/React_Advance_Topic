import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, Button, ScrollView, StyleSheet, TextInput } from 'react-native'

export default function JsonServerAPI() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState()
    const getApiData = async () => {
        const data = await fetch("http://192.168.1.11:2000/user");
        const parsedData = await data.json();
        if (filterData.length > 0) {
            const filter = parsedData.filter((i) => i.Name == filterData)
            setData(filter);
        } else {
            setData(parsedData)
        }

    }

    const DeleteApi = async (id) => {
        await fetch(`http://192.168.1.11:2000/user/${id}`,{
            method:"DELETE"
        });
        getApiData()
    }
    useEffect(() => {
        getApiData()
    }, [filterData])

    const postData = async () => {
        const bodys = {
            Name: "Janardan",
            Email: "Janardan@gmail.com",
            Age: 35,
            Mobile: 80800494027
        }
        const res = await fetch('http://192.168.1.11:2000/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodys)
        })
        const result = await res.json()
        console.warn(result)
        getApiData()
    }

    return (
        <View  >
            <View style={style.container}>
                <TextInput style={style.inputbox} placeholder="Search" onChangeText={(text) =>
                    setFilterData(text)

                } /></View>
            <View>
                {
                    data ?
                        <FlatList
                            // data={data.filter((i) => i?.Name == filterData)}
                            data={data}
                            renderItem={({ item }) =>
                                <View style={style.container}>
                                    <Text style={style.text}>{item.Name}</Text>
                                    <Text style={style.text}>{item.Age}</Text>
                                    <Text style={style.text}>{item.Email}</Text>
                                    <Text style={style.text}>{item.Mobile}</Text>
                                    <Button title="Edit" />
                                    <Button title="Delete" onPress={() => DeleteApi(item.id)} />
                                </View>

                            } />
                        : ""
                }

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        margin: 20,
        padding: 10
        ,
        backgroundColor: "gray",
    }
    ,
    text: {
        padding: 3,
        color: 'white',
    },
    inputbox: {
        borderBlockColor: 'red',
        padding: 20,
        borderWidth: 1
    }
    ,

})