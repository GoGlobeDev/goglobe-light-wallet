function getBalance(abi, address, ContractAddr, callback) {
	var myContract = new web3.eth.Contract(abi, ContractAddr);
	myContract.methods.balanceOf(address).call().then(function(res) {
		let balance = res/1000000;
		callback(balance);
	});
}
export default getBalance;
