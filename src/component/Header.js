import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
/**
 * que componente usamos el de componente o de clase?,
 * en este no ncesitamos estados asi que se elimina todo y se crean en funcion
 */


const Header = props => (  
    <View style = {styles.container}>
        <TouchableNativeFeedback
            onPress={()=> props.toggle()}
        >
            <Icon
                name = 'bars'
                color = 'white'
                size = {25}
            />
        </TouchableNativeFeedback>
        <Image
            style ={styles.logo}
            source ={require('../images/logo.png')}
        />
        <Icon
                name = 'search'
                color = 'white'
                size = {25}
            />
    </View>
);

export default Header;  

const styles = StyleSheet.create({
      container :{
          flexDirection: 'row',
          height:60,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'black',
          paddingHorizontal: 15,//el problemas com margin es que se sobreponene otros elementos
        },
      logo: {
          width: 120,
          height:40
      }
})