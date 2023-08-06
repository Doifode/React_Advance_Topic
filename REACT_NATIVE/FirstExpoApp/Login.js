import { View } from "react-native"
import { Text, Button } from "react-native"
export const Login = (props) => {
    return (
        <>

            <View>
                <Text onPress={() => console.warn('hi')}>Login</Text>
                <Button title="Press"  />
            </View>

        </>)
}
