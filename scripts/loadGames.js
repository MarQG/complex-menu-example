const inquirer = require("inquirer");

const loadRoms = function(){
    this.roms = [ "1) Super Mario Bros.", "2) Metroid", "3) Tetris", "4) Donkey Kong", "5) Rygar", "e) Exit"];
    this.start = function(callback){
        let that = this;
        inquirer.prompt([{
            type: "list",
            name: "rom",
            message: "Please select a ROM to load.",
            choices: this.roms
        }])
        .then((answer) => {
            let romArr = answer.rom.split(") ");
            if(romArr[0] === "e" ){
                console.log("Returning to Main Menu.");
                callback(true);
            }else {
                that.runRom(romArr[1]);
                that.start(callback);
            }

            return;
        });
    },
    this.runRom = function (rom){
        console.log("Loading " + rom + " .....");
        console.log("ROM Loaded!");
        console.log("Starting Game...");
    }
};

module.exports = loadRoms;