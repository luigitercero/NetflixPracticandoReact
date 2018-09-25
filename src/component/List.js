import React, {Component} from 'react'
import{
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
}
from 'react-native';
const show_first= [{
    "key":2,
    "name":"Modern Family",
    "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
 },
 {
    "key":3,
    "name":"The Flash",
    "image":"https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
 },
 {
    "key":4,
    "name":"Supergirl",
    "image":"https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
 },
]


class List extends Component {
    _renderItem(item) {
        return (
            <Image   style={{width:120, height: 180}} source ={{uri:item.image}} />
        )
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View>
                    <Text style = {styles.text}>My List</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={()=><View style={{width:5}}/>}
                        renderItem = {({item})=> this._renderItem(item)}
                        data={show_first}
                    />
                </View>
                <View>
                    <Text style = {styles.text}>Top picks for you gg</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={()=><View style={{width:5}}/>}
                        renderItem = {({item})=> this._renderItem(item)}
                        data={show_first}
                    />
                </View>
            </View>
        );
    }
}

export default List; 

const styles = StyleSheet.create ({
    text: {
        color:'white'
    }
})