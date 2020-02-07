import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
let tickerABI = [
	{
		constant: true,
		inputs: [],
		name: 'itemCount',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x6bfb0d01'
	},
	{
		constant: true,
		inputs: [{ name: '', type: 'uint256' }],
		name: 'items',
		outputs: [
			{ name: 'symbol', type: 'string' },
			{ name: 'price', type: 'uint256' },
			{ name: 'volume', type: 'uint256' }
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0xbfb231d2'
	},
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		signature: 'constructor'
	},
	{
		constant: false,
		inputs: [
			{ name: '_symbol', type: 'string' },
			{ name: '_price', type: 'uint256' },
			{ name: '_volume', type: 'uint256' }
		],
		name: 'setStock',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xbbbbf318'
	}
];
let tickerAddress = '0x1AdDeBED9Ebc635156Bd35E686EC2f6591108E39';
web3.eth.defaultAccount = web3.eth.accounts[0];

const tickerContract = web3.eth.contract(tickerABI).at(tickerAddress);
export { tickerContract };
