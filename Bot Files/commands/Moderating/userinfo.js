const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Displays information about a user.")
    .addUserOption(option =>
        option
        .setName("user")
        .setDescription("The user you would like to get information about.")
        .setRequired(true)
        ),
    implemented: false
}