import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        paddingTop: 10,
        paddingHorizontal: 30,
    },

    formField: {
        marginBottom: 20,
    },

    formLabel: {
        color: "#000",
        fontSize: 18,
        marginBottom: 5,
    },

    formInput: {
        backgroundColor: "#efefef",
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        paddingVertical: 10,
        marginBottom: 20,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
