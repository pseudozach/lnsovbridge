var erc20tokenContract = web3.eth.contract([
    {
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DOMAIN_SEPARATOR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PERMIT_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "permit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);
  var erc20token = erc20tokenContract.new({
    from: web3.eth.accounts[1],
    data: '0x60e06040523480156200001157600080fd5b50600073e592427a0aece92de3edee1f18e0157c05861564905060006b033b2e3c9fd0803ce800000090508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060808181525050806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200011e91906200028e565b60405180910390a37f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060400160405280600681526020017f536f7672796e0000000000000000000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620001d995949392919062000231565b6040516020818303038152906040528051906020012060c081815250505050620002f3565b6200020981620002ab565b82525050565b6200021a81620002bf565b82525050565b6200022b81620002e9565b82525050565b600060a0820190506200024860008301886200020f565b6200025760208301876200020f565b6200026660408301866200020f565b62000275606083018562000220565b620002846080830184620001fe565b9695505050505050565b6000602082019050620002a5600083018462000220565b92915050565b6000620002b882620002c9565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60805160a05160601c60c0516114dc620003346000396000818161066b01526107840152600081816104170152610a62015260006103f101526114dc6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461022a578063a9059cbb14610248578063d505accf14610278578063dd62ed3e14610294576100cf565b80633644e515146101ac57806370a08231146101ca5780637ecebe00146101fa576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd1461014057806330adf81f14610170578063313ce5671461018e575b600080fd5b6100dc6102c4565b6040516100e9919061116f565b60405180910390f35b61010c60048036038101906101079190610ed2565b6102fd565b6040516101199190611093565b60405180910390f35b61012a6103ef565b6040516101379190611211565b60405180910390f35b61015a60048036038101906101559190610ddd565b610413565b6040516101679190611093565b60405180910390f35b61017861063d565b60405161018591906110ae565b60405180910390f35b610196610664565b6040516101a39190611211565b60405180910390f35b6101b4610669565b6040516101c191906110ae565b60405180910390f35b6101e460048036038101906101df9190610d70565b61068d565b6040516101f19190611211565b60405180910390f35b610214600480360381019061020f9190610d70565b6106d5565b6040516102219190611211565b60405180910390f35b6102326106ed565b60405161023f919061116f565b60405180910390f35b610262600480360381019061025d9190610ed2565b610726565b60405161026f9190611093565b60405180910390f35b610292600480360381019061028d9190610e30565b61073d565b005b6102ae60048036038101906102a99190610d9d565b610a5e565b6040516102bb9190611211565b60405180910390f35b6040518060400160405280600681526020017f536f7672796e000000000000000000000000000000000000000000000000000081525081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103dd9190611211565b60405180910390a36001905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106275781600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051e906111b1565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b610632848484610b62565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026020528060005260406000206000915090505481565b6040518060400160405280600381526020017f534f56000000000000000000000000000000000000000000000000000000000081525081565b6000610733338484610b62565b6001905092915050565b42841015610780576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610777906111f1565b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600260008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061081a906112e5565b919050558a604051602001610834969594939291906110c9565b6040516020818303038152906040528051906020012060405160200161085b92919061105c565b604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051610898949392919061112a565b6020604051602081039080840390855afa1580156108ba573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561092e57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61096d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096490611191565b60405180910390fd5b86600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92589604051610a4b9190611211565b60405180910390a3505050505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610adc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050610b5c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b92915050565b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610be3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bda906111d1565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054016000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d0f9190611211565b60405180910390a3505050565b600081359050610d2b8161144a565b92915050565b600081359050610d4081611461565b92915050565b600081359050610d5581611478565b92915050565b600081359050610d6a8161148f565b92915050565b600060208284031215610d8657610d85611367565b5b6000610d9484828501610d1c565b91505092915050565b60008060408385031215610db457610db3611367565b5b6000610dc285828601610d1c565b9250506020610dd385828601610d1c565b9150509250929050565b600080600060608486031215610df657610df5611367565b5b6000610e0486828701610d1c565b9350506020610e1586828701610d1c565b9250506040610e2686828701610d46565b9150509250925092565b600080600080600080600060e0888a031215610e4f57610e4e611367565b5b6000610e5d8a828b01610d1c565b9750506020610e6e8a828b01610d1c565b9650506040610e7f8a828b01610d46565b9550506060610e908a828b01610d46565b9450506080610ea18a828b01610d5b565b93505060a0610eb28a828b01610d31565b92505060c0610ec38a828b01610d31565b91505092959891949750929550565b60008060408385031215610ee957610ee8611367565b5b6000610ef785828601610d1c565b9250506020610f0885828601610d46565b9150509250929050565b610f1b81611253565b82525050565b610f2a81611265565b82525050565b610f3981611271565b82525050565b610f50610f4b82611271565b61132e565b82525050565b6000610f618261122c565b610f6b8185611237565b9350610f7b8185602086016112b2565b610f848161136c565b840191505092915050565b6000610f9c601683611237565b9150610fa78261137d565b602082019050919050565b6000610fbf600283611248565b9150610fca826113a6565b600282019050919050565b6000610fe2601683611237565b9150610fed826113cf565b602082019050919050565b6000611005601483611237565b9150611010826113f8565b602082019050919050565b6000611028600c83611237565b915061103382611421565b602082019050919050565b6110478161129b565b82525050565b611056816112a5565b82525050565b600061106782610fb2565b91506110738285610f3f565b6020820191506110838284610f3f565b6020820191508190509392505050565b60006020820190506110a86000830184610f21565b92915050565b60006020820190506110c36000830184610f30565b92915050565b600060c0820190506110de6000830189610f30565b6110eb6020830188610f12565b6110f86040830187610f12565b611105606083018661103e565b611112608083018561103e565b61111f60a083018461103e565b979650505050505050565b600060808201905061113f6000830187610f30565b61114c602083018661104d565b6111596040830185610f30565b6111666060830184610f30565b95945050505050565b600060208201905081810360008301526111898184610f56565b905092915050565b600060208201905081810360008301526111aa81610f8f565b9050919050565b600060208201905081810360008301526111ca81610fd5565b9050919050565b600060208201905081810360008301526111ea81610ff8565b9050919050565b6000602082019050818103600083015261120a8161101b565b9050919050565b6000602082019050611226600083018461103e565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061125e8261127b565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156112d05780820151818401526020810190506112b5565b838111156112df576000848401525b50505050565b60006112f08261129b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561132357611322611338565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f534f563a20494e56414c49445f5349474e415455524500000000000000000000600082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f496e73756666696369656e7420616c6c6f77616e636500000000000000000000600082015250565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b7f534f563a20455850495245440000000000000000000000000000000000000000600082015250565b61145381611253565b811461145e57600080fd5b50565b61146a81611271565b811461147557600080fd5b50565b6114818161129b565b811461148c57600080fd5b50565b611498816112a5565b81146114a357600080fd5b5056fea2646970667358221220a48756e3f454ffcab4baab85be4bc68d767eef5c8988993f17e5d73b3530e4fa64736f6c63430008070033', 
    gas: '4700000'
  }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('erc20token Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  });