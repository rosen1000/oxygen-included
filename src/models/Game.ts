import fs from "fs";

export class Game {
    id: number;
    name: string;
    date: Date = new Date();
    constructor(name: string) {
        this.id = generateID();
        this.name = name;
    }
}

function generateID(): number {
    //TODO
    return 0;
}

export function createGame(): Game {
    return new Game("Asd");
}

export function saveGame(game: Game) {
    fs.writeFileSync(`../../saves/${game.name}.json`, JSON.stringify(game));
}

export function listGames() {
    return fs
        .readdirSync("../../saves")
        .map((game) => game.split(".").slice(0, game.length - 1).join("."));
}

export function loadGame(name: string) {
    let file = fs.readFileSync(`../../saves/${name}.json`, {
        encoding: "utf8",
    });
    return <Game>JSON.parse(file);
}
