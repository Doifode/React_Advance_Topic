import { View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { ApiCalling, ApiCallingMultiple } from "./ApiCalling";
import JsonServerAPI from "./JsonServerAPI";

const TabNav = createBottomTabNavigator()
export const Index = () => {
    return (
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name="Login" component={Login}></TabNav.Screen>
                <TabNav.Screen name="dashboard" component={Dashboard}></TabNav.Screen>
                {/* <TabNav.Screen name="apicalling" component={ApiCalling}></TabNav.Screen> */}
                <TabNav.Screen name="apicalling" component={ApiCallingMultiple}></TabNav.Screen>
                {/* <TabNav.Screen name="apicalling" component={JsonServerAPI}></TabNav.Screen> */}


            </TabNav.Navigator>
        </NavigationContainer>
    )
}
