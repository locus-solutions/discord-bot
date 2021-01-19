// Required discord.js since it's the language we're using to code the bot 
const { MessageEmbed } = require("discord.js");
// This is the name of the command and you can add an alias such as 8b inside the quotes
module.exports = {
  name: "8ball",
  aliases: [""],

  run: async (client, message, args) => {
// 'let responses' will allow the replies to the 8ball command cycled instead of 'yes, yes, yes, yes, yes' over and over.
      let responses = [
        "...nah",
        "...sure",
        "Without a doubt.",
        "Nope, don't think that'd work",
        "Yep, 100% (sarcasm, this is really stupid and the fact you asked this makes me think you're stupid.)",
        "Not a single doubt in my mind when I say this is absolutely true.",
        "Try again later, My robot-brain cannot process the retarded ass question you just asked.",
        "Not in a million years.",
        "No.",
        "Yes."
      ];
      let response = responses[Math.floor(Math.random() * responses.length)];
      let Embed = new MessageEmbed()
        .setTitle("8Ball") // Sets the title of the embed.
        .setDescription(`Answer: ${response}`) // The message of the embed.
        .setFooter(message.author.username, message.author.displayAvatarURL()) // Footer for the embed, this code will show the bots profile picture in the footer.
        .setColor(`BLUE`); // Sets the color of the embed, you may use hex.
      message.channel.send(Embed);
    }
  
};
