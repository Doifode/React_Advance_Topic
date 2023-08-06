import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export const Dashboard = () => {
    const [user, setUser] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userAge, setUserAge] = useState()
    const [userMobile, setUserMobile] = useState()
    const postData = async () => {
        const body = {
            Name: user,
            Email: userEmail,
            Age: userAge,
            Mobile: userMobile
        }
        if (body.Age && body.Mobile && body.Name && body.Email) {
            fetch("http://192.168.1.11:2000/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
        } else{ alert('Please fill all values')}
        setUser('')
        setUserEmail('')
        setUserAge('')
        setUserMobile('')
    }
    return (
        <View style={styles.viewStyle}>
            <TextInput value={user} onChangeText={(text) => setUser(text)} style={styles.inputStyle} placeholder="Enter Name here..." />
            <TextInput value={userEmail} onChangeText={(text) => setUserEmail(text)} style={styles.inputStyle} placeholder="Enter Email here..." />
            <TextInput value={userMobile} onChangeText={(text) => setUserMobile(text)} style={styles.inputStyle} placeholder="Enter Mobile here..." />
            <TextInput value={userAge} onChangeText={(text) => setUserAge(text)} style={styles.inputStyle} placeholder="Enter Age here..." />
            <Button title="Save User" onPress={() => postData()} />


        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        margin: 10
    },
    inputStyle: {
        borderBlockColor: "gray"
        ,
        borderWidth: 1,
        margin: 2,
        padding: 10

    }
})
