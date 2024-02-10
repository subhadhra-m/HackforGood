import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activities from "./Activities.json";
import Workshop from "./Workshop";
import { FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 30}}>Activities</Text>
        </View>
        <SafeAreaView style={styles.body}>
          <FlatList 
            data={Activities}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Workshop', {workshop: item})} style={{ paddingHorizontal: 10} }>
                <View style={styles.activity}>
                  <Image style={styles.image}  source={{ uri: `${item.image}` }}/>
                    <View style={{ paddingHorizontal: 15, paddingTop: 15, paddingBottom: 5, flexDirection: 'row', backgroundColor: 'white'}}>
                      <Text style={styles.label}> {item.title} </Text>
                    </View>
                    <View style={{ paddingHorizontal: 15, paddingBottom: 15, flexDirection: 'row' }}>
                      <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}> {item.dates} </Text>
                    </View>
                </View>
              </TouchableOpacity>
            )}/>
            
          
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
    );
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
    body: {
      flex: 10,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    activity: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 20,
      backgroundColor: 'white',
      margin: 10,
      marginVertical: 20
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 20
    }, 
    label: {
      fontSize: 15,
      width: '100%',
      color: 'black',
      fontWeight: '700'
    }
  });