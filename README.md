## smart-contract

### Installation

```
brew tap ethereum/ethereum
brew install solidity
```

### Tutorial

#### Greeter

https://github.com/ethereum/ethereum-org/blob/master/views/content/greeter.md

#### Token

https://github.com/ethereum/ethereum-org/blob/master/views/content/token.md

```
$ ./build.sh ContractName
```

##### On the node where the _from/owner_ account has been created: _OwnerNode_

```
> eth.accounts
["0x..."]
>
> eth.defaultAccount = eth.accounts[0]
"0x..."
>
> loadScript(PATH/mine_ContractName.js)
Contract transaction send: TransactionHash: 0x... waiting to be mined...
true
> Contract mined! Address: 0x...
```

Copy the Contract Address: _ContractAddress_

##### On the node where the _to_ account has been created: _OtherNode_

```
> eth.accounts[0]
> "0x..."
```

Copy the address: _OtherAddress_

##### On the _OwnerNode_

```
> ContractName.transfer(OtherAddress, AMOUNT)
```

##### On the _OtherNode_

```
> loadScript(PATH/factory_ContractName.js)
{
  abi: [{
  	...
}
> var ContractName = factory_ContractName.at(ContractAddress)
undefined
> ContractName.balanceOf(OtherAddress)
AMOUNT
```