# !/bin/bash

contract=$1
shift

echo "compiling contract $contract"
bash -c "solc -o target --gas --abi --bin --overwrite solidity/$contract.sol"
abi=$(cat target/$contract.abi)
factory="var factory_$contract = eth.contract($abi);"
bin=$(cat target/$contract.bin)

if [ ! -f "script/mine_$contract.js"  ]; then

  echo "initializing mine_$contract.js"
  echo "$factory\n\
var compiled_$contract =\"0x$bin\";\n\
\n\
// TODO constructor parameters\n\
// var _... = ...;\n\
\n\
var $contract = factory_$contract.new(\n\
    /* TODO _... */,\n\
    {from: eth.accounts[0], data: compiled_$contract, gas: '0x47E7C4'}, function(e, contract) {\n\
    if(e) {\n\
        console.error(e); // If something goes wrong, at least we'll know.\n\
        return;\n\
    }\n\
\n\
    if(!contract.address) {\n\
        console.log(\"Contract transaction send: TransactionHash:\" + contract.transactionHash +\" waiting to be mined...\");\n\
    } else {\n\
        console.log(\"Contract mined! Address: \" + contract.address);\n\
        console.log(contract);\n\
    }\n\
});" >> script/mine_$contract.js
fi

if [ ! -f "script/factory_$contract.js"  ]; then

  echo "initializing factory_$contract.js"
  echo "$factory" >> script/factory_$contract.js
fi
