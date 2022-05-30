import React, {useState} from "react";

import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Pressable,
    Keyboard,
    FlatList,
    SafeAreaView,
} from "react-native";

import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = React.useState("");
    const [imc, setImc] = React.useState(null);
    const [textButton, setTextButton] = React.useState("Calcular IMC");
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [imcList, setImcList] = React.useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".");
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc }].reverse());
        setImc(totalImc);
    }

    function verificationImc() {
        if (imc === null) {
            setErrorMessage("Campo obrigatório*");
        }
    }

    function validationImc() {
        console.log(imcList);
        if (weight !== null && height !== null) {
            imcCalculator();
            setMessageImc("Seu IMC é igual: ");
            setHeight(null);
            setWeight(null);
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
        } else {
            verificationImc();
            setImc(null);
            setTextButton("Calcular IMC");
        }
    }

    return (
        <View style={styles.formContext}>
            {imc === null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <View style={styles.formField}>
                        <Text style={styles.formLabel}>Altura</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>

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
                        <Text style={styles.errorMessage}>{errorMessage}</Text>

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
                </Pressable>
            : 
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />

                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc();
                        }}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

            <FlatList 
                style={styles.listImcs} 
                data={imcList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => {item.id}} 
                renderItem={({item}) => {
                    return(
                        <Text style={styles.listImcsItem}>Resultado IMC = {item.imc}</Text>
                    )
                }} 
            />
        </View>
    );
}
