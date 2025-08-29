/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const FancyCards = () => {
  return (
    <View>

      <Text style={styles.headingText}>Trending Places</Text>

      <View style={[styles.card,styles.cardElevated]}>
        <Image 
          source={{
            uri:'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DvT0nj1f53epEEMwsEM3jTzZH96jG8iM-TvYTDp7wEc='
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLebel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>a nice place to visit in Jaipur. Built of Red and pink sandstone</Text>
            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
              <Text style={styles.cardFooter}>12 min, away</Text>
            </View>
            
        </View>
      </View>

      <View style={[styles.card,styles.cardElevated]}>
        <Image 
          source={{
            uri:'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DvT0nj1f53epEEMwsEM3jTzZH96jG8iM-TvYTDp7wEc='
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLebel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>a nice place to visit in Jaipur. Built of Red and pink sandstone</Text>
            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
              <Text style={styles.cardFooter}>12 min, away</Text>
            </View>
        </View>
      </View>

    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
  },
  cardElevated: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  cardImage: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 16,
    paddingTop: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  cardLebel: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#5d6d7e',
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 12,
    color: '#e74c3c',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  }
})