var readline = require("readline");

var r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var say = (client) => {
    r1.question("请输入:", inputStr => {

        client.write(inputStr);
        say(client);
    });
}

module.exports = say;