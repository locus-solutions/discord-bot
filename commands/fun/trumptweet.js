const fetch = require('node-fetch') // Another module to install, just read the readme.md at this point smh...
const { MessageEmbed }= require('discord.js') // I don't need to explain this hopefully

module.exports = {
    name: "trumptweet",
    aliases: [""],
    
    run: async(client, message, args) => {
        message.delete(); // Deletes the message that is sent to start the command, ex -trumptweet suck my balls, the bot will delete the message then
        const text = args.slice(0).join(" ")
        if(!text) return message.channel.send(new MessageEmbed()
        .setTitle("Invalid Usage")
        .setColor("RED")
        .setDescription("You need to put some text behing your message...")) // If user hasn't put any text (-trumptweet) it will not just send a blank tweet it'll ask for text GG
        fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`) // api
        .then((res) => res.json())
        .then((body) => {
            let embed = new MessageEmbed()
            .setImage(body.message)
            .setColor("BLUE")
            message.channel.send(embed)
        })
        
    }
}
