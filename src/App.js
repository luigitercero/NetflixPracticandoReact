import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import List from './component/List'
import Slider from './component/Slider';
import Header from './component/Header'
import SideMenu from 'react-native-side-menu'
import Menu from './component/Menu'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen) {
        this.setState({isOpen})
    }
    render() {
        return (
            <View style= {{flex:1}}>        
                <SideMenu
                    menu = {<Menu/>}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{flex: 1}}
                >
                <Header toggle={this.toggle.bind(this)}/>
                 <ScrollView style = {styles.scrollContainer}>
                 
                    <Slider/>
                    <List/>
                 </ScrollView>        
                </SideMenu>
            </View>
            
        )
    }
}
const styles = StyleSheet.create ({
    container: {
        backgroundColor:'black'
    },
    text:{
        color:'white'
    },
    scrollContainer:{
        backgroundColor:'black'
    }
})
export default App;