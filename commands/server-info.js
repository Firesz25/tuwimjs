module.exports = {
    name: 'server-info',
    description: 'Server-Info!',
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};