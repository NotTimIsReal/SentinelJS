module.exports = client => {
    client.open_account = async (guild) => {
        const data = await guild.client.db.guilds.find({"guildId" : guild.id})
        if(!data) {
            await guild.client.db.insertOne({
                guildId : guild.id,
                antispammer: false,
                antispammer_options: {},
                channelCreate : false ,
                channelDelete : false ,
                channelPinsUpdate : false ,
                channelUpdate : false ,
                emojiCreate : false ,
                emojiDelete : false ,
                emojiUpdate : false ,
                guildBanAdd : false ,
                guildBanRemove : false ,
                guildCreate : false ,
                guildDelete : false ,
                guildIntegrationsUpdate : false ,
                guildMemberAdd : false ,
                guildMemberRemove : false ,
                guildMemberUpdate : false ,
                guildUpdate : false ,
                inviteCreate : false ,
                inviteDelete : false ,
                messageCreate : false ,
                messageDelete : false ,
                messageDeleteBulk : false ,
                messageReactionAdd : false ,
                messageReactionRemove : false ,
                messageReactionRemoveAll : false ,
                messageReactionRemoveEmoji : false ,
                messageUpdate : false ,
                presenceUpdate : false ,
                roleCreate : false, 
                roleDelete : false ,
                roleUpdate : false ,
                stageInstanceCreate : false ,
                stageInstanceDelete : false ,
                stageInstanceUpdate : false ,
                stickerCreate : false ,
                stickerDelete : false ,
                stickerUpdate : false ,
                threadCreate : false ,
                threadDelete : false ,
                threadListSync : false ,
                threadMembersUpdate : false ,
                threadMemberUpdate : false ,
                threadUpdate : false ,
                userUpdate : false ,
                voiceStateUpdate : false ,
            })
	}
}
}