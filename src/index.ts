import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

import { promtMessage, timeout } from "./functions/common";
import { listGames, Game, loadGame, createGame, saveGame } from "./models/Game";

let currentGame: Game;

async function main() {
    clear();
    console.log(chalk.green(figlet.textSync("OxygenIncluded")));
    console.log("Fan made game based on Klei's OxygenNotIncluded");
    console.log("\nMenu:");
    console.log("1. Start new game");
    console.log("2. Load game");
    console.log("3. Settings");
    console.log("4. Exit");
    try {
        switch (parseInt(await promtMessage())) {
            case 1:
                startNew();
                break;
            case 2:
                loadGameMenu();
                break;
            case 3:
                settings();
                break;
            case 4:
                exit();
                break;
            default:
                console.log("Invalid option!");
                await timeout(2000);
                timeout(2);
                main();
        }
    } catch (e) {
        console.log("Invalid option!");
        await timeout(2000);
        main();
    }
}

async function startNew() {
    currentGame = await createGame();
    saveGame(currentGame);
    play();
}

async function loadGameMenu() {
    let saves = listGames();
    if (saves.length == 0) {
        console.log(chalk.red("ERROR: You don't have any saved games!"));
        console.log("Do you want to create a new one? (y/n)");
        if ((await promtMessage()).toLowerCase() == "y") return startNew();
        else return main();
    }
    console.log("Which game do you want to load?");
    for (let i = 0; i < saves.length; i++) {
        console.log(`${i + 1}. ${saves[i]}`);
    }
    let index = parseInt(await promtMessage());
    if (index == NaN || index < 1 || index > saves.length) {
        console.log("Invalid option!");
        return main();
    }
    let loadName = saves[index - 1];
    currentGame = loadGame(loadName);
    console.log("Game loaded!");
    await timeout(2000);
    play();
}

async function settings() {
    console.log("Not implemented yet ¯\\_(ツ)_/¯")
    await timeout(2000);
    main();
}

async function exit() {
    console.log("Goodbye!");
    process.exit(0);
}

async function play() {

}

main();
