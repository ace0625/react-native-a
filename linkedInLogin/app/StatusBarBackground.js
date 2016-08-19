'use strict'
import React, { Component, View } from 'react-native'

class StatusBarBackground extends Component {

	render() {
		return (
			<View style={styles.StatusBarBackground}>
			</View>
			)
	}
}

const styles = React.StyleSheet.create({

	StatusBarBackground: {
		height: 20,
		backgroundColor: "white"
	}
})

module.exports = StatusBarBackground