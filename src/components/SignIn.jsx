import Text from "./Text";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
  press: {
    backgroundColor: "#2574f5",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 5,
  },
});

//Validation for inputs
const validationSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required'),
    password: yup
    .string()
    .required('Password is required')
})

//formik init
const SignIn = () => {
  //get func from useSignIn hook
  const [ signIn ] = useSignIn();

  //Form submit
  const onSubmit = async (values) => {
    //destruckt fields
    const { username, password } = values;

    //get authenticate from data that signIn returns
    try {
      const { authenticate } = await signIn({ username, password });
      console.log('cred data', authenticate.accessToken)
    } catch (e) {
      console.log(e)
    }
  }

  //formik setup
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={ formik.errors.username && formik.touched.username ? styles.errorInput : styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur('username')}
      />
      {/*If input field is used and error occurs, shows errors from validschema */}
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={formik.errors.password && formik.touched.password ? styles.errorInput : styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />
      {/*If input field is used and error occurs, shows errors from validschema */}
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <View style={styles.press}>
        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
