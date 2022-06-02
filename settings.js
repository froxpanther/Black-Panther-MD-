//═══════════════════════════════════════════════════════//

//

//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀

//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 

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

global.owner = ['Didula Rashmika']

global.premium = ['🖤Black Panther Bot🖤']

global.ownernomer = '+94741671668'

global.ownername = 'Didula Rashmika'

global.botname = '🖤Black Panther Bot🖤'

global.footer = '©Black panther🖤.'

global.ig = 'https://github.com/BlackPanther-svg/Black-Panther-MD-'

global.region = 'India, South India, Kerala'

global.sc = 'https://github.com/BlackPanther-svg/Black-Panther-MD-'

global.myweb = 'https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA'

global.packname = '🖤Black Panther Bot🖤'

global.author = '🖤Black Panther Bot🖤'

global.sessionName = 'session'

global.prefa = ['','!','.','🐦','🐤','🗿']

global.sp = '⭔'

global.mess = {

    success: 'Done ✓',

    admin: 'This Feature Is Only For Admin!',

    botAdmin: 'Bot Must Be Admin First!',

    owner: 'This Feature Is Only For Owner!',

    group: 'Feature Used Only For Groups!',

    private: 'Features Used Only For Private Chat!',

    bot: 'This Feature Is Only For Bot',

    wait: 'Wait A minute...',

    error: 'Error! Maybe Api Key Is Expired🤔!',

    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',

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
