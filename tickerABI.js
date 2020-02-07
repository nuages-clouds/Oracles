export const tickerABI = [
	{
		constant: true,
		inputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		name: 'stocks',
		outputs: [
			{
				name: 'symbol',
				type: 'string'
			},
			{
				name: 'price',
				type: 'uint256'
			},
			{
				name: 'volume',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x226b876c'
	},
	{
		constant: true,
		inputs: [],
		name: 'stockCount',
		outputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		signature: '0x8508da5c'
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
			{
				name: '_symbol',
				type: 'string'
			},
			{
				name: '_price',
				type: 'uint256'
			},
			{
				name: '_volume',
				type: 'uint256'
			}
		],
		name: 'setStock',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		signature: '0xbbbbf318'
	}
];
