import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {


    console.log(item);
return(
    <View>
    {Object.entries(item).map(([key, value]) => (
        key !== 'id' && (
        <View key={key}>
            <Text>{key}: {value}</Text>
        </View>
        )
    ))}
    </View>
)
}

export default RepositoryItem;