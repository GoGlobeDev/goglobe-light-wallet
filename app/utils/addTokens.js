function getBalance(abi, address, ContractAddr, callback) {
	console.log(ContractAddr);
	console.log(address);
	var myContract = new web3.eth.Contract(abi, ContractAddr);
	myContract.methods.balanceOf(address).call().then(function(res) {
		let balance = res/1000000;
		console.log(balance)
		callback(balance);
	});
}
export default getBalance;
