const {Client, Collection } = require('discord.js');
const {token, prefix} = require('./config.json');
const client = new Client({disableEveryone: true});
const fs = require('fs');


client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
  client.user.setActivity("put a status here" , { type: 'PLAYING'}) // can be changed to PLAYING, STREAMING, WATCHING
  .then(console.log(`Client ${client.user.tag} was loaded, started in ${client.guilds.cache.size} guilds.`))
  .catch(console.error);
});


client.on('message', async message => {
    if(message.author.bot) return;
      
    
    let messageArray2 = message.content.split(" ");
    let args2 = messageArray2.slice(1)
    let cmd2 = messageArray2[0];
    if (cmd2 === `-test`) {
        message.author.send("command response")
        }      
       
              
    
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
  
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args)

  
  
  });
  

 



client.login(token);
