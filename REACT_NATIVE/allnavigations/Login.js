import { useState } from "react"
import { TextInput, View, Text, Button } from "react-native"


export const Login = () => {
    const [userData, setUserData] = useState({
        name: '',
        password: ""
    })
    return (
        <View style={{ marginTop: 50, marginRight: 50, marginLeft: 50 }}>

            <Text>Login Page</Text>
            <TextInput onChange={(e) => setUserData(userData.name = e.target)} placeholder='user name' style={{ padding: 20, borderBottomColor: 'red' }} />
            <TextInput onChange={(e) => setUserData(userData.name = e.target)} placeholder='password' style={{ padding: 20, borderBottomColor: 'red' }} />

            <Button title='Login' onPres={() => { }} />
        </View>
    )
}
