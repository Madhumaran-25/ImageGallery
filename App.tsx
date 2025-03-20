// Importing react
import React from "react";

// Importing navigation components for handling app navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importing gallery Screen
import GalleryScreen from "./src/screens/GalleryScreen";
import { strings } from "./src/utils/strings";

const Stack = createStackNavigator();

/**
 * Component: App
 * Purpose: Serves as the main entry point of the application.
 *          Handles navigation between different screens using React Navigation.
 */

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name= {strings.MainScreen} component={GalleryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;