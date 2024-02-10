import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activities from "./Activities.json";
import { FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

export default function Workshop({route}) {
    const navigation = useNavigation();
    const { workshop } = route.params;
    const [isRegistered, setRegistered] = useState(false);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View>
                <Image style={{ width: '100%', height: 270 }} source={{ uri: `${workshop.image}` }} />
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={30} color="#9ccb3c" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.item}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>
                        {`${workshop.title}`}
                    </Text>
                    <View style={{backgroundColor: '#9ccb3c', borderRadius: 20, width: '30%', height: 30, justifyContent: 'center'}}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', alignSelf: 'center' }}>
                            {`${workshop.tag}`}
                        </Text>
                    </View>
                    <Text style={styles.ingredients}>
                        Dates available: {`${workshop.dates}`} 
                        {'\n'}
                        Price: {`${workshop.price}`}
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>
                        About the workshop:
                    </Text>
                    <Text style={styles.ingredients}>
                        {`${workshop.description}`}
                    </Text>
                </View>
                {isRegistered ? (
                    <TouchableOpacity
                            onPress={() => navigation.navigate('Survey', {workshop: workshop})}
                            style={styles.buttonContainer4}
                        >
                            <Text style={styles.buttonText4}> fill in the survey </Text>
                        </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            setRegistered(true);
                        }}
                        style={styles.buttonContainer4}
                    >
                        <Text style={styles.buttonText4}> register </Text>
                    </TouchableOpacity>
                )}
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    details: {
        marginBottom: 30,
        padding: 5
    },
    item: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: 'white',
        top: 210,
        left: 20,
        paddingTop: 4,
        paddingLeft: 5,
    },
    ingredients: {
        fontSize: 17,
        color: 'black'
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