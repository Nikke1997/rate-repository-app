import { gql } from '@apollo/client'

//Auth to get token when user logs in
export const AUTHENTICATE = gql`
mutation Authenticate($credentials: AuthenticateInput!){
authenticate(credentials: $credentials){
    accessToken
}
}
`