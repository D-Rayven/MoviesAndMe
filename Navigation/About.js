import {Button, View} from "react-native";
import * as React from "react";


export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Retour" />
        </View>
    );
}
