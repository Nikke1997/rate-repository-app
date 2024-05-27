import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
})

console.log('data', data)
console.log('error', error)
console.log('loading', loading)

if(loading) {
    return { loading, repositories: null};
}

if(error) {
    console.error(error);
    return { error, repositories: null};
}

return {
    repositories: data ? data.repositories : null
}

}

    export default useRepositories;