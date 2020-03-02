let logStyles = [
    `background: linear-gradient(transparent, hsla(135, 100%, 80%, 1), transparent)`,
    `padding: 0 8px`,
].join(`;`);

let warnStyles = [
    `background: linear-gradient(transparent, hsla(52, 100%, 80%, 80%), transparent)`,
    `padding: 0 8px`,
].join(`;`);

let errorStyles = [
    `background: linear-gradient(transparent, hsla(0, 100%, 88%, 95%), transparent)`,
    `padding: 0 8px`,
].join(`;`);

console.log(`%cThis is a log message.`, logStyles);
console.warn(`%cThis is a warn message.`, warnStyles);
console.error(`%cThis is an error message.`, errorStyles);

console.log(`This is a log message.`);
console.warn(`This is a warn message.`);
console.error(`This is an error message.`);
