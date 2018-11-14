import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
class KnowledgePoint extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: navigation.state.params.title
	});

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<ScrollView>
					{
						!params.content.content1 ? <Text style={{ letterSpacing: 2 }}>{params.content}</Text>
						: <Text style={{ letterSpacing: 2 }}>{params.content.content1}</Text>
					}
					{ !!params.content.content2 && <Text style={{ letterSpacing: 2 }}>{params.content.content2}</Text>}
					{ params.content.down && <TouchableOpacity onPress={() => {
											Linking.openURL('http://goglobechain.com/download').catch((err) =>
												console.error('An error occurred', err)
											);
										}}><Text style={{ letterSpacing: 2, color: 'blue' }}>goglobechain.io/download</Text></TouchableOpacity> }
					{ !!params.content.content3 && <Text style={{ letterSpacing: 2 }}>{params.content.content3}</Text>}
					{ !!params.content.content4 && <Text style={{ letterSpacing: 2 }}>{params.content.content4}</Text>}
					{ !!params.content.content5 && <Text style={{ letterSpacing: 2 }}>{params.content.content5}</Text>}
					{ !!params.content.content6 && <Text style={{ letterSpacing: 2 }}>{params.content.content6}</Text>}
					{ params.content.image && <Image style={{ width: 100, height: 100}} source={{ uri: 'https://images-cdn.shimo.im/OTVJceI16qceA3f0/image.png!thumbnail'}}/>}
					<Text style={{ marginTop: 20 }}>{params.ps}</Text>
					
				</ScrollView>
			</View>
		);
	}
}

export default KnowledgePoint;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff'
	}
});
