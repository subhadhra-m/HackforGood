import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, SafeAreaView, Alert} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'

export default function Survey({route}) {
    const navigation = useNavigation();
    const { workshop } = route.params;
    const scale = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <View style={styles.header}>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 20}}>Survey for {`${workshop.title}`}</Text>
        </View>
        <View style = {{flex: 9, padding: 15}}>
            <Text style={{fontSize: 15}}> Rate on a scale of 1 to 10 how satisfied {'\n'} you are with this workshop. </Text>
            <SelectDropdown
                data={scale}
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            <Text style={{fontSize: 15, paddingTop: 10}}> Rate on a scale of 1 to 10 how satisfied {'\n'} you are with the instructors. </Text>
            <SelectDropdown
                data={scale}
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            <Text style={{fontSize: 15, paddingTop: 10}}> Rate on a scale of 1 to 10 how satisfied {'\n'} you are with the resources provided. </Text>
            <SelectDropdown
                data={scale}
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            <Text style={{fontSize: 15, paddingTop: 10}}> Rate on a scale of 1 to 10 how much this activity {'\n'} has impacted you positively.</Text>
            <SelectDropdown
                data={scale}
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            
            <Text style={{fontSize: 15, paddingVertical: 10}}> Any other feedback to help us improve? </Text>
            <TextInput
                style={{height: 100, width: '97%', borderWidth: 1, alignSelf: 'center', paddingTop: 10, borderRadius: 5, padding: 15}}
                onChangeText={() => {}}
                placeholder="Input your feedback here!"
            />

            <TouchableOpacity
                onPress={() => {
                    Alert.alert('Thanks for your feedback!', 'We have received your submission.', [
                        {
                          text: 'Ok',
                          onPress: () => navigation.navigate('RegisterPage'),
                          style: 'cancel',
                        },
                    ]);
                }}
                style={styles.buttonContainer4}
            >
                <Text style={styles.buttonText4}> Submit </Text>
            </TouchableOpacity>

        </View>
        

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        backgroundColor:'#9ccb3c',
        justifyContent: 'flex-end',
        paddingBottom: 15
    },
    buttonContainer4: {
        marginVertical: 10,
        height: 50,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#9ccb3c',
        flexDirection: 'row',
    },
    buttonText4: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});