import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
const TopTab = createMaterialTopTabNavigator()
export const TopTabNav = () => {
    return (
        <NavigationContainer >
            <TopTab.Navigator>
                <TopTab.Screen name="Login" component={Login} />

                <TopTab.Screen name="Dashboard" component={Dashboard} />

            </TopTab.Navigator>
        </NavigationContainer>

    )
}
