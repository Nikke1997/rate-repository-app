import React from 'react';
import Text from './Text';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    topContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        color: '#555',
    },
    language: {
        backgroundColor: '#0366d6',
        color: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginTop: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    stat: {
        alignItems: 'center',
    },
    statCount: {
        fontWeight: 'bold',
    },
});

// Makes numbers over 1000 or 1000 to show one decimal accurate to k
const formatCount = (count) => {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
};

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }}  onError={(e) => console.log('Error loading image', e.nativeEvent.error)} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{item.fullName}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.language}>{item.language}</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statCount}>{formatCount(item.stargazersCount)}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statCount}>{formatCount(item.forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statCount}>{item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statCount}>{item.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;