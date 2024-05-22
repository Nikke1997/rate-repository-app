import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        backgroundColor: '#24292e',
        display: 'flex',
        flexDirection: 'row'

    },
    text: {
        color: theme.colors.textSecondary,
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 15,
        fontWeight: 'bold'
    }
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
        <Link to='/'><Text style={styles.text}>Repositories</Text></Link>
        <Link to='/signIn'><Text style={styles.text}>Sign In</Text></Link>
        </ScrollView>
    </View>
)
}

export default AppBar;