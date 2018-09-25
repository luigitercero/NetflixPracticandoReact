import React,{Component} from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
}from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
const {width, height} = Dimensions.get('window')

class Menu extends Component {
    render() {
        return(
            <View style ={ styles.menu}>
                <View style = {styles.avatarContainer}>
                    <View style = {styles.avatarImage}>
                        <Image
                            style = {styles.avatar}
                            source={require('../images/user.png')}
                        />
                        <Text style = {styles.text}>Luigitercero</Text>
                    </View>
                    <Icon
                        name='exchange'
                        color = 'white'
                        size={25}
                    />
                </View>
                <ScrollView style = {styles.scrollContainer}>
                    <View style = {styles.textWithIcon}>
                        <View style = {styles.withIcon}>
                            <Icon
                                style = {styles.iconWithText}
                                name="download"
                                color = "white"
                                size={28}
                            />
                            <Text style={styles.text}>My Downlad</Text>
                          
                        </View>
                        <Icon
                            style = {styles.rightIcon}
                            name= "angle-right"
                            color = 'white'
                            size = {25}
                        />
                    </View>
                    <View style = {styles.textWithIcon}>
                        <View style = {styles.withIcon}>
                            <IonIcons 
                                style = {styles.iconWithText}
                                name="md-checkmark"
                                color = "white"
                                size={28}
                            />
                            <Text style={styles.text}>My Downlad</Text>
                            
                        </View>
                        <Icon
                                style = {styles.rightIcon}
                                name= "angle-right"
                                color = 'white'
                                size = {25}
                            />
                    </View>
                    <View style = {[styles.items,styles.itemSelected]}>
                        <Text style = {styles.text}>Home</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Tv Show</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Documentary</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Indepent Movies</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>India Movies</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                    <View style = {styles.noSelectedItems}>
                        <Text style = {styles.text}>Action & Aventure</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Menu;

const styles = StyleSheet.create({
    menu :{
        flex:1,
        width:width,
        height:height,
        backgroundColor:'#191919' , 
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.65,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    avatarImage: {
        flexDirection: 'column',
      
    },
    text: {
        color:'#3b3b3b',
        fontSize: 15
    },
    textWithIcon : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15 ,
        borderColor: '#000',
        borderBottomWidth: 3,
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollContainer: { 
        width: width *0.65
    },
    rightIcon: {
        paddingRight: 20,
    },
    
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20,
    },
    items: {
        paddingVertical: 20,
        paddingLeft: 20,
        top: 5,
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems:{
        paddingVertical: 20,
        paddingLeft: 25,
        top:5 
    }


})  