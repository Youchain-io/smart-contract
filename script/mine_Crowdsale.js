var factory_Crowdsale = eth.contract([{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenReward","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"safeWithdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"ifSuccessfulSendTo","type":"address"},{"name":"fundingGoalInEthers","type":"uint256"},{"name":"durationInMinutes","type":"uint256"},{"name":"etherCostOfEachToken","type":"uint256"},{"name":"addressOfTokenUsedAsReward","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"totalAmountRaised","type":"uint256"}],"name":"GoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"backer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"isContribution","type":"bool"}],"name":"FundTransfer","type":"event"}]);
var compiled_Crowdsale ="0x60806040526000600760006101000a81548160ff0219169083151502179055506000600760016101000a81548160ff02191690831515021790555034801561004657600080fd5b5060405160a080610a728339810180604052810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550670de0b6b3a76400008402600181905550603c83024201600381905550670de0b6b3a7640000820260048190555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505061091e806101546000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301cb3b201461027c57806329dcb0cf1461029357806338af3eed146102be5780636e66f6e91461031557806370a082311461036c5780637a3a0e84146103c35780637b3e5e7b146103ee578063a035b1fe14610419578063fd6b7ef814610444575b6000600760019054906101000a900460ff161515156100b757600080fd5b34905080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600260008282540192505081905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336004548481151561016357fe5b046040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156101e957600080fd5b505af11580156101fd573d6000803e3d6000fd5b505050507fe842aea7a5f1b01049d752008c53c52890b1a6daf660cf39e8eec506112bbdf633826001604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390a150005b34801561028857600080fd5b5061029161045b565b005b34801561029f57600080fd5b506102a861053b565b6040518082815260200191505060405180910390f35b3480156102ca57600080fd5b506102d3610541565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032157600080fd5b5061032a610566565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561037857600080fd5b506103ad600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061058c565b6040518082815260200191505060405180910390f35b3480156103cf57600080fd5b506103d86105a4565b6040518082815260200191505060405180910390f35b3480156103fa57600080fd5b506104036105aa565b6040518082815260200191505060405180910390f35b34801561042557600080fd5b5061042e6105b0565b6040518082815260200191505060405180910390f35b34801561045057600080fd5b506104596105b6565b005b600354421015156105395760015460025410151561051d576001600760006101000a81548160ff0219169083151502179055507fec3f991caf7857d61663fd1bba1739e04abd4781238508cde554bb849d790c856000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b6001600760016101000a81548160ff0219169083151502179055505b565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915090505481565b60015481565b60025481565b60045481565b6000600354421015156108ef57600760009054906101000a900460ff16151561076757600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000811115610766573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015610720577fe842aea7a5f1b01049d752008c53c52890b1a6daf660cf39e8eec506112bbdf633826000604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390a1610765565b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b5b600760009054906101000a900460ff1680156107cf57503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156108ee576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051600060405180830381858888f19350505050156108d1577fe842aea7a5f1b01049d752008c53c52890b1a6daf660cf39e8eec506112bbdf66000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002546000604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390a16108ed565b6000600760006101000a81548160ff0219169083151502179055505b5b5b505600a165627a7a72305820c5d2d42070c9435936bb659215bddee92944e63a933ff65da83dbefa2fdef86e0029";

// TODO constructor parameters
var _ifSuccessfulSendTo = "0x09fef261b3a19fb388157c7cbe874e75bb8de6a6";
var _fundingGoalInEthers = 250;
var _durationInMinutes = 45000;
var _etherCostOfEachToken = 5;
var _addressOfTokenUsedAsReward = "0x5f327f2acad59ce2b7823961830103fda318d004";

var Crowdsale = factory_Crowdsale.new(
    _ifSuccessfulSendTo,
    _fundingGoalInEthers,
    _durationInMinutes,
    _etherCostOfEachToken,
    _addressOfTokenUsedAsReward,
    {from: eth.accounts[0], data: compiled_Crowdsale, gas: '0x47E7C4'}, function(e, contract) {
    if(e) {
        console.error(e); // If something goes wrong, at least we'll know.
        return;
    }

    if(!contract.address) {
        console.log("Contract transaction send: TransactionHash:" + contract.transactionHash +" waiting to be mined...");
    } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
    }
});