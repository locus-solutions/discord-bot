const randomPuppy = require('random-puppy'); // This is a module that is being required, open node.js and redirect it to your folder for the bot (or just open cmd in your bots folder) and type npm i random-puppy, you will need to download all required modules
const Discord = require('discord.js'); // I've already commented this before but i'm bored so this is basically just requiring the language the bot is coded in 

module.exports = {
    name: "meme",
    aliases: ['memes'],

    run: async (client, message, args) => {
        const subReddits = ["dankmemes",  "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setImage(img)
     
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed);
    }
}
