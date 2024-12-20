import {View, Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="flex items-center justify-center h-screen bg-white">
            <View className="flex items-center justify-center">
                <Text className="font-bold text-blue-600 text-2xl">Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;