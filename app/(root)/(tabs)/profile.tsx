import {View, Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

const Profile = () => {
    return (
        <SafeAreaView className="flex items-center justify-center h-screen bg-white">
            <View className="flex items-center justify-center">
                <Text className="font-bold text-blue-600 text-2xl">Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile;