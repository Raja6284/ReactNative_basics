import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>This</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>is😍</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>scrollable...</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>scroll</Text>
                    </View>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>more..</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>end</Text>
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: 'red',
        //elevation:4
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'yellow'
    }
})