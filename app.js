const inquirer = require('inquirer');
const GameLoader = require("./scripts/loadGames.js");

let run = true;
const mainMenuChoices = [ 
    "Play Game: Load a ROM to play.", 
    "Settings: Change EmuSoft Settings",
    "Exit: Leave EmuSoft"];

const loadCommand = (command) => {
    // Switch Case Base on the command
    switch(command){
        case "Play Game":
            let gameLoader = new GameLoader();
            gameLoader.start(runMainMenu);
            break;
        case "Settings":
            console.log(command);
            runMainMenu(true);
            break;
        case "Exit":
            console.log(command);
            runMainMenu(false);
            break;
        default:
            runMainMenu(true);
    }
}

const runMainMenu = (shouldRun) => {
    console.log('\x1Bc');
    var message =   
    '  ============================== \n' +
    '  =      Welcome to EmuSoft    = \n' +
    '  = What would you like to do? = \n' +
    '  ============================== \n';

    console.log(message);

    if(shouldRun){
        // Use inquirer to get the user selection
        inquirer.prompt([{
            type: "list",
            name: "answer",
            message: "What would you like to do?",
            choices: mainMenuChoices,
        }]).then(result => loadCommand(result.answer.split(":")[0]));
    }
    else {
        // We are going exit the program
        process.exit();
    }
}

runMainMenu(true);




