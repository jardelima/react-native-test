import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        paddingTop: 10,
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

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
    },

    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },

    listImcsItem: {
        width: "100%",
        fontSize: 20,
        marginVertical: 9,
    }
});

export default styles;
