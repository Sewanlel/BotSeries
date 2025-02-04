const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const TOKEN = 'YOUR_BOT_TOKEN';
const CHANNEL_ID = 'YOUR_CHANNEL_ID'; // Replace with the ID of the channel you want to send the message to

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
        channel.send('Hello World! Everything seems to be working fine.')
            .then(() => console.log('Message sent!'))
            .catch(console.error);
    } else {
        console.error('Channel not found!');
    }
});

client.login(TOKEN);