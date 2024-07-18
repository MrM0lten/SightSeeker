import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/homeScreen";

const Stack = createStackNavigator();

export const AppStack:React.FC = () => {
    return (
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#101010',
          },
          headerShown: false,
        }}>
          <Stack.Screen name="home" 
            component={HomeScreen}/>
        </Stack.Navigator>
    );
  };