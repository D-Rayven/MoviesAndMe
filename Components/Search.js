import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 100 }}>
                <TextInput style={ styles.textInput } placeholder="Titre du film"/>
                <Button title="Rechercher" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = {
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: 'brown',
        borderWidth: 1,
        paddingLeft: 5
    }
}

export default Search