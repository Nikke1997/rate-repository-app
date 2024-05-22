import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        backgroundColor: '#24292e',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',  
    },
    scrollView: {
        flexDirection: 'row',
    },
    text: {
        color: '#ffffff',  
        marginHorizontal: 15,  
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
        fontSize: 18,  
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <Link to='/'><Text style={styles.text}>Repositories</Text></Link>
                <Link to='/signIn'><Text style={styles.text}>Sign In</Text></Link>
            </ScrollView>
        </View>
    );
}

export default AppBar;