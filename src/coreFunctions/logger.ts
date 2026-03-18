const isDevMode = true;

export const logger = (message: string, data: any) => {
    if (!isDevMode) return;
    console.log(`State Tracker:${message}`, data);
}
export const logChange = (name: any, prevState: any, nextState: any) => {
    if (!isDevMode) return;
    console.log(`State Tracker: ${name}`);
    console.log("Previous State", prevState);
    console.log("Next State", nextState);
}