//═══════════════════════════════════════════════════════//
//
//                              🖤Black Panther Bot🖤
//🖤Black PantherMD 🖤 Created By Didula Rashmika 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94741671668']
global.premium = ['94741671668']
global.ownernomer = '94741671668'
global.ownername = 'Didula Rashmika'
global.botname = '🖤Black Panther MD🖤'
global.footer = '©Black Panther MD.'
global.ig = 'https://github.com/BlackPanther-svg/Black-Panther-MD-'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/BlackPanther-svg/Black-Panther-MD-'
global.myweb = 'https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA'
global.packname = '🖤Black Panther MD🖤'
global.author = '🖤Black Panther MD🖤'
global.sessionName = 'session'
global.prefa = ['','!','.','🖤','💣','🇱🇰']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: ' "╔══╗╔╗─╔══╗╔╗─╔╗╔═╗\n║╔╗║║║─╚║║╝║╚╦╝║║╦╝\n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗\n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝\n*╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*» \n*│❖ Oᴡɴᴇʀ :ī.am/Didulaꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩*\n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ*  \n*│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs*\n*│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs*\n*│❖ ᴀᴅᴍɪɴ ʙᴏᴛ* \n*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩*\n*You tube:https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA\n*Group:https://chat.whatsapp.com/LWOdea4zvErAHkLNuAQkoP╰─────────────────☘︎*"

        ',
    botAdmin: ' "╔══╗╔╗─╔══╗╔╗─╔╗╔═╗\n║╔╗║║║─╚║║╝║╚╦╝║║╦╝\n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗\n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝\n*╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*» \n*│❖ Oᴡɴᴇʀ :ī.am/Didulaꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩*\n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ*  \n*│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs*\n*│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs*\n*│❖ ᴀᴅᴍɪɴ ʙᴏᴛ* \n*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩*\n*You tube:https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA\n*Group:https://chat.whatsapp.com/LWOdea4zvErAHkLNuAQkoP╰─────────────────☘︎*"

        ',
    owner: ' "╔══╗╔╗─╔══╗╔╗─╔╗╔═╗\n║╔╗║║║─╚║║╝║╚╦╝║║╦╝\n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗\n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝\n*╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*» \n*│❖ Oᴡɴᴇʀ :ī.am/Didulaꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩*\n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ*  \n*│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs*\n*│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs*\n*│❖ ᴀᴅᴍɪɴ ʙᴏᴛ* \n*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩*\n*You tube:https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA\n*Group:https://chat.whatsapp.com/LWOdea4zvErAHkLNuAQkoP╰─────────────────☘︎*"

        ',
    group: ' "╔══╗╔╗─╔══╗╔╗─╔╗╔═╗\n║╔╗║║║─╚║║╝║╚╦╝║║╦╝\n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗\n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝\n*╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*» \n*│❖ Oᴡɴᴇʀ :ī.am/Didulaꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩*\n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ*  \n*│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs*\n*│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs*\n*│❖ ᴀᴅᴍɪɴ ʙᴏᴛ* \n*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩*\n*You tube:https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA\n*Group:https://chat.whatsapp.com/LWOdea4zvErAHkLNuAQkoP╰─────────────────☘︎*"

        ',
    private: ' "╔══╗╔╗─╔══╗╔╗─╔╗╔═╗\n║╔╗║║║─╚║║╝║╚╦╝║║╦╝\n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗\n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝\n*╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*» \n*│❖ Oᴡɴᴇʀ :ī.am/Didulaꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩*\n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ*  \n*│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs*\n*│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs*\n*│❖ ᴀᴅᴍɪɴ ʙᴏᴛ* \n*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩*\n*You tube:https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA\n*Group:https://chat.whatsapp.com/LWOdea4zvErAHkLNuAQkoP╰─────────────────☘︎*"

        ',
    bot: ' "╔══╗╔╗─╔══╗╔╗─╔╗╔═╗\n║╔╗║║║─╚║║╝║╚╦╝║║╦╝\n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗\n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝\n*╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*» \n*│❖ Oᴡɴᴇʀ :ī.am/Didulaꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩*\n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ*  \n*│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs*\n*│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs*\n*│❖ ᴀᴅᴍɪɴ ʙᴏᴛ* \n*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩*\n*You tube:https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA\n*Group:https://chat.whatsapp.com/LWOdea4zvErAHkLNuAQkoP╰─────────────────☘︎*"

        ',
    wait: '🖤Wait A minute...🖤',
    error: '🖤Error! Maybe Api Key Is Expired🤔🖤!',
    endLimit: '🖤Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = fs.readFileSync('./GojoMedia/gojo.jpg')
global.fluming = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flarun = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flasmurf = fs.readFileSync('./GojoMedia/gojo.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
