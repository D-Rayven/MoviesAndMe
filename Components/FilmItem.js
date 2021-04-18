import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={ styles.main_container }>
                <View style={ styles.image }>

                </View>
                <View style={ styles.content }>
                    <View style={ styles.header }>
                        <View style={ styles.title_text }>
                            <Text>Titre du film</Text>
                        </View>
                        <View style={ styles.vote }>
                            <Text>Vote</Text>
                        </View>
                    </View>
                    <View style={ styles.description }>
                        <Text>Description</Text>
                    </View>
                    <View style={ styles.date }>
                        <Text>Sorti le 00/00/0000</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        backgroundColor: 'gray',
    },
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
        justifyContent: 'space-between'
    },
    title_text: {

    },
    vote: {

    },
    description: {
        flex: 3,
        backgroundColor: 'red'
    },
    date: {
        flex: 1,
        backgroundColor: 'purple',
        textAlign: 'center'
    }

})

export default FilmItem