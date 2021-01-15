const Discord = require("discord.js");

module.exports = {
    name: "say",
    description: "says something",
    category: "fun",
    aliases: [""],
    usage: "[ command | message ]",

    run: async(client, message, args) => {
        const sayMessage = args.join(" ");
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(sayMessage)

        message.channel.send(embed)
    }
}
