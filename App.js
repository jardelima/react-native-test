/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {StyleSheet, Text, View} from "react-native";
import Form from "./src/components/Form";
import Title from "./src/components/Title";

const App = () => {
    return (
        <>
            <View style={styles.container}>
                <Title />
                <Form />
            </View>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e5e5",
        paddingTop: 80,
    },
});
