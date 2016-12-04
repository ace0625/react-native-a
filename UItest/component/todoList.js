import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

class CustomText extends Component {
  render() {
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class TodoList extends Component {
  componentWillMount() {
    this.setState({
      inputText: '',
      todos: [],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }
          }
            value={this.state.inputText}
            />
          <TouchableOpacity onPress={this.addTodo.bind(this)}>
             <Text>
               ADD
             </Text>
         </TouchableOpacity>
         {
           this.state.todos.map((todoItem, index)=> {
              return (
             <Text key={index}>
               {todoItem}
             </Text>
           );
            })
       }
      </View>
    );
  }
  /*
  Add an item
  */
  addTodo() {
    let todoItem = this.state.inputText;
    let todos = this.state.todos;
    todos.push(todoItem);
    this.setState({
      inputText: '',
      todos: todos,
    });
  }
  /*
    complete adding
  */
  completeAdd(index) {
    let todos = this.state.todos;
    todos[index].complete = !todos[index].complete;
    this.setState({
      todos: todos,
    });
  }
  /*
  Delete an Item
*/
  deleteItem(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
