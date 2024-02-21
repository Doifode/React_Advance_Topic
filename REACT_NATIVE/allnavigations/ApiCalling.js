import { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, TextInput } from 'react-native'

export const ApiCalling = () => {
    const [apiData, setApiData] = useState();
    const getApiData = async (i) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
        const datas = await data.json()
        setApiData(datas)
    }

    useEffect(() => {
        getApiData(1);
    }, [])
    return (
        <View>
            {apiData ? <View style={{ margin: 50 }}>
                <Text>
                    {apiData.id}
                </Text>
                <Text>
                    {apiData.userId}
                </Text>
                <Text>
                    {apiData.title}
                </Text>
                <Text>
                    {apiData.body}
                </Text>
            </View> : <Text>Not Working</Text>}
        </View>
    )
}

// ==================================================Multiple valules calling api =====================================



export const ApiCallingMultiple = () => {
    const [multipleData, setMultipleData] = useState([])
    const [text, setText] = useState()
    const getApiData = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await data.json();
        setMultipleData(result)
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        // Using Flat List 
        <View style={{ margin: 20 }}>
            <TextInput   placeholder="Search" onChangeText={(text) =>
                setText(text)

            } />
            {
                multipleData ?

                    <FlatList
                        data={multipleData.filter((i) => i.body.toLowerCase().includes(text))}
                        renderItem={({ item }) =>
                            <View>
                                <Text>{item.id}</Text>
                                <Text>{item.body}</Text>
                                <Text>{item.title}</Text>
                            </View>

                        } />
                    : ""
            }
        </View>

        // <ScrollView style={{ margin: 20 }}>

        //     {/*Using map function  */}
        //     {/* {
        //         multipleData?.length > 0 ? multipleData.map((i) =>
        //             <View key={i.id} style={{ borderBlockColor: 'red', borderBottomWidth: 2, padding: 10 }}>
        //                 <Text style={{ backgroundColor: 'gray', textAlign: "center" }}>
        //                     {i.id}
        //                 </Text>
        //                 <Text>
        //                     {i.title}
        //                 </Text>
        //                 <Text> BODY:
        //                     {i.body}
        //                 </Text>
        //             </View>

        //         ) : ""
        //     } */}

        //     {/* Using Flat List */}

        // </ScrollView >
    )

}
