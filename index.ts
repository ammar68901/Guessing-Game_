#! /usr/bin/env node
import inquirer from "inquirer"
//1.Computer will generate a rondom number
//2.user input for guessing number 
//3. compare user number with computer random number
let randomNum= Math.floor(Math.random()*2 +1) ;
const answers = await inquirer.prompt([{
   name:"userNum",
   type:"number",
   message:"please Guessing the number 2 or 1 ",

}]);
if (answers.userNum===randomNum){
    console.log("congratulation")

}
else{
    console.log ("u enter wronge Number")
}