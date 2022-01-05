import readline from "readline";

export function promtMessage(): Promise<string> {
    return new Promise((res, rej) => {
        const RL = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        RL.on("line", (answer) => {
            RL.close();
            res(answer);
        });
    });
}

export function timeout(ms: number): Promise<void> {
    return new Promise((res, rej) => {
        setTimeout(res, ms)
    });
}
