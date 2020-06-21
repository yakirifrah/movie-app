import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';



const Card = () => {
    const {card,cardImg,cardText} = styles;
    return (
        <>
        <TouchableOpacity style={card}>
            <Image style={cardImg} source={{uri:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}}/>
            <Text style={cardText}>aaa</Text>
        </TouchableOpacity>
    </>
    )
}


const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        marginBottom:10,
        marginLeft:'2%',
        width:'96%',
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{width: 3,height:3}
    },
    cardImg:{
        width:'100%',
        height: 200,
        resizeMode:'cover'

    },
    cardText:{
        padding:10,
        fontSize:15
    }
})

export default Card;
