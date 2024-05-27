import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    //Seperate repositoryitems 
    listContainer: {
        backgroundColor: '#eee',
        padding: 10,
    },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
const { repositories } = useRepositories();

console.log('repos', repositories);


  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];


    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (<RepositoryItem item={item} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
}

export default RepositoryList;