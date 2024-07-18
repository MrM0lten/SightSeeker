import { Text, View,StyleSheet } from "react-native";

const IndexScreen:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Index Screen</Text>
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

export default IndexScreen;