#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "q1",
            message: "Enter your pin",
            type: "number",
        }

    ]
)

if (pinAnswer.q1 === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt(
        [

            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["Withdraw", "Check balance"]
            }

        ]
    )


    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]
        );

        myBalance -= amountAns.amount

        console.log("Your current balance is: " + myBalance);


    } else if (operationAns.operation === "Check balance"){
        console.log("Your balance is: " + myBalance);
        
    }
}

else {
    console.log("Incorrect pin number???");

}