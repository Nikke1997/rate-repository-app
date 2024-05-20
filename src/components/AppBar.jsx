import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        backgroundColor: '#24292e',
    },
    text: {
        color: theme.colors.textSecondary,
        marginBottom: 15,
        marginTop: 15,
        fontWeight: 'bold'
    }
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Repositories</Text>
    </View>
)
}

export default AppBar;