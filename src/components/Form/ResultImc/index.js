import React from "react";
import {View, Text, TouchableOpacity, Share} from "react-native";
import styles from "./style";

export default function ResultImc({resultImc, messageResultImc}) {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${resultImc}`,
        });
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>
                {messageResultImc} {resultImc}
            </Text>

            <View>
                <TouchableOpacity 
                    style={styles.sharedButton}
                    onPress={onShare}>
                    <Text style={styles.sharedButtonText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
