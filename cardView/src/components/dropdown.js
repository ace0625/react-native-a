import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-menu';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: 'Choose',
    };
  }

  render() {
    return (
      <MenuContext style={{ flex: 1 }} ref="MenuContext">
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Dropdown test
          </Text>
          <Menu style={styles.dropdown} onSelect={(value) => this.setState({ selection: value })}>
          <MenuTrigger>
            <Text>{this.state.selection}</Text>
          </MenuTrigger>

          <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                     renderOptionsContainer={(options) =>
                       <ScrollView><Text>CHOOSE SOMETHING....</Text>{options}</ScrollView>}>
          <MenuOption value="Option One">
            <Text>Option One</Text>
          </MenuOption>
          <MenuOption value="Option Two">
            <Text>Option Two</Text>
          </MenuOption>
          <MenuOption value="Option Three">
            <Text>Option Three</Text>
          </MenuOption>
          <MenuOption value="Option Four">
            <Text>Option Four</Text>
          </MenuOption>
          <MenuOption value="Option Five">
            <Text>Option Five</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  disabled: {
      color: '#ccc',
    },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  contentText: {
    fontSize: 18,
  },
  dropdown: {
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5,
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200,
  },
});

module.exports = Dropdown;
