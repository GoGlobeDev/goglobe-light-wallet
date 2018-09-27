import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

const versionData = [
	{
		version: '1.0.0',
		con: [ '发布内测版本，该版本实现了', '基于助记词和BIP44规范创建 HDWallet', '支持钱包基本功能：转账、收款、交易记录', '支持ETH和GOG' ],
	},
	{
		version: '1.0.1',
		con: [ '在1.0版本的基础上绑定设备的流程，增加了用户体验','增加了修改密码/交易密码的功能','修改bug' ]
	},
	{
		version: '1.1.0',
		con: [ '增加了提币功能，用户可以将设备挖出来的币提至自己的链上钱包内','增加了设备信息界面，可以在设备信息界面内查看设备的具体信息，包括算力构成，每日产出以及初始奖励等','“我的操作”界面重新定义了在APP内部的操作记录','增加了主动/被动检查APP更新的功能' ]
	}
];

export class Versions extends Component {
	_keyExtractor = (item, index) => item;
	render() {
		return (
			<View style={styles.versionsPage}>
				<ScrollView>
					<FlatList
						data={versionData}
						renderItem={({ item }) => (
							<View style={styles.version}>
								<Text style={styles.versionTitle}>{item.version}</Text>
								<FlatList
									data={item.con}
									keyExtractor={this._keyExtractor}
									renderItem={({ item }) => (
										<View style={styles.versionDescrCon}>
											<Text style={styles.versionDescr}>* {item}</Text>
										</View>
									)}
								/>
							</View>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default withNavigation(Versions);

const styles = StyleSheet.create({
	versionsPage: {
		flex: 1,
		backgroundColor: 'white',
		paddingLeft: 15
	},
	version: {
		borderBottomWidth: 1,
		borderColor: '#eee',
		backgroundColor: 'white',
		paddingBottom: 15
	},
	versionTitle: {
		fontSize: 28,
		lineHeight: 40
	},
	versionDescrCon: {},
	versionDescr: {
		// height: 30,
		lineHeight: 30,
		fontSize: 15
	}
});
