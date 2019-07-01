
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { incNumber, getNotes } from '../publics/redux/actions/notes';

import Counter from '../Components/counter'

class App extends Component {
    static navigationOptions = {
        title: 'Home Note'
    }
    constructor() {
        super();
        this.state = {
            counter: 0,
           
      
        }
    }
    handleNavigate = () => {
        const { navigation } = this.props;
        navigation.navigate('Note')
    }
    componentDidMount = () => {
        // setInterval(() => {
        //     this.props.dispatch(incNumber(this.props.notes.number + 1))
        // }, 1000)
        this.getData()
    }

    getData = () => {
        this.props.dispatch(getNotes())
    }
    // componentWillUnmount = () => {
    //   clearTimeout();
    // }

    renderItem = ({ item, index }) => (
        <View style={styles.content}>
        <View style={styles.card}>
          <Text>{item.name.title} {item.name.first} {item.name.last}</Text>
          <Text>{item.gender}</Text>
        </View>
        </View>
      )
    
      _keyExtractor = (item, index) => item.login.uuid.toString();

    render() {
    //     let  values  = this.props.notes.data
    //    console.log(values.first_name);
       
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={{ color: 'blue', fontSize: 30 }} >Kelas Week 2</Text>{/*Inline Styling */}
                {/* {this.props.notes.number > 10 && <Text style={{ color: 'red', fontSize: 20 }} >{this.props.notes.number}</Text>} */}
                <Counter title="Hijau COunter" />
                <Counter title={26} />
                <TouchableOpacity onPress={this.handleNavigate} style={{ backgroundColor: 'blue' }} >
                    <Text style={{ color: 'white' }} >Note Me</Text>
                </TouchableOpacity>
               <FlatList
            data={this.props.notes.data}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            refreshing={this.props.notes.isLoading}
            onRefresh={this.getData}
          />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
    container: {
        flex: 1, //flexBox CSS
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    card: {
        width: 300,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
