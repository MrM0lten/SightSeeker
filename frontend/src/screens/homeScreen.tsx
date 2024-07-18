import { StyleSheet, Text, View } from "react-native";


const HomeScreen:React.FC = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        fontSize: 30,
    }
})

export default HomeScreen;