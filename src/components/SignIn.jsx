import Text from "./Text";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";

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

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      <View style={styles.press}>
        <Pressable onPress={formik.handleSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
