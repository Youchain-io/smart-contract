var event_FundTransfer_Crowdsale = Crowdsale.FundTransfer(function(error, result) {
    if (!error) {
        if (result.args.isContribution) {
            console.log("New backer! Received " + web3.fromWei(result.args.amount, "ether") + " ether from " + result.args.backer);
            console.log("  The current funding at " + (100 *  Crowdsale.amountRaised.call() / Crowdsale.fundingGoal.call()) + "% of its goals. Funders have contributed a total of " + web3.fromWei(Crowdsale.amountRaised.call(), "ether") + " ether.");

            var timeleft = Math.floor(Date.now() / 1000) - Crowdsale.deadline();
            if (timeleft > 3600) {
                console.log("  Deadline has passed, " + Math.floor(timeleft / 3600) + " hours ago");
            } else if (timeleft > 0) {
                console.log("  Deadline has passed, " + Math.floor(timeleft / 60) + " minutes ago");
            } else if (timeleft > -3600) {
                console.log("  " + Math.floor(-1 * timeleft / 60) + " minutes until deadline");
            } else {
                console.log("  " + Math.floor(-1 * timeleft / 3600) + " hours until deadline");
            }
        } else {
            console.log("Funds transferred from Crowdsale account: " + web3.fromWei(result.args.amount, "ether") + " ether to " + result.args.backer);
        }
    } else {
        console.error("Something went wrong: " + error);
    }
});

var event_GoalReached_Crowdsale = Crowdsale.GoalReached(function(error, result) {
    if (!error) {
        console.log("Goal reached! Received " + web3.fromWei(result.args.totalAmountRaised, "ether"));
    } else {
        console.error("Something went wrong: " + error);
    }
});
