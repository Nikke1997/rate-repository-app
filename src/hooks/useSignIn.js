import { AUTHENTICATE } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useSignIn = () => {
    //destruck auth func and result
    const [authenticate, result] = useMutation(AUTHENTICATE)

    //func to use when grabbing username and password and return data
    const signIn = async ({ username, password }) => {
        const { data } = await authenticate({ variables: { credentials: { username, password }}})
        console.log('data in useSignIn', data)
        return data;
    }
  return [signIn, result]
}

export default useSignIn
