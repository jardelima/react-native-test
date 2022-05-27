import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = React.useState("");
    const [imc, setImc] = React.useState(null);
    const [textButton, setTextButton] = React.useState("Calcular IMC");

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc() {
        if (weight !== null && height !== null) {
            imcCalculator();
            setMessageImc(`Seu IMC é igual: `);
            setHeight(null);
            setWeight(null);
            setTextButton("Calcular Novamente");

            return;
        }

        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.formLabel}>Altura</Text>

                    <TextInput
                        style={styles.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex: 1.75"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.formField}>
                    <Text style={styles.formLabel}>Peso</Text>

                    <TextInput
                        style={styles.formInput}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex: 80.12"
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc();
                    }}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}
