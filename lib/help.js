const fs = require('fs')
const chalk = require('chalk')

exports.searchMenu = (msg, prefix, botName, ownerName, runTime, readmore, banChats, SETTING) => {
return `┏❒❲ • ❳ 🅄🅂🄴🅁 🄸🄽🄵🄾 ❲ • ❳❒
┃ ➣ Username : _*@${msg.pushName}*_
┃ ➣ Link : _*wa.me/${msg.sender}*_
┗❒
    
┏❒❲ • ❳ 🄱🄾🅃 🄸🄽🄵🄾 ❲ • ❳
┃ ➣ Nama Bot : _*${botName}*_
┃ ➣ Nama Owner : _*${ownerName}*_
┃ ➣ Mode :  _*${banChats ? "Self" : "Public"}*_
┃ ➣ Runtime : _*${runTime}*_
┃ ➣ Prefix : _*( ${prefix} )*_
┗❒

${readmore}
┏❒❲ • ❳ 🅂🄴🄰🅁🄲🄷 🄼🄴🄽🅄 ❲ • ❳❒
┃ ➣ ${prefix+ 'pinterest'}
┃ ➣ ${prefix+ 'pinstick'}
┃ ➣ ${prefix+ 'play'}
┃ ➣ ${prefix+ 'music'}
┗❒`
}

exports.downloadMenu = (msg, prefix, botName, ownerName, runTime, readmore, banChats, SETTING) => {
return `┏❒❲ • ❳ 🅄🅂🄴🅁 🄸🄽🄵🄾 ❲ • ❳❒
┃ ➣ Username : _*@${msg.pushName}*_
┃ ➣ Link : _*wa.me/${msg.sender}*_
┗❒
   
┏❒❲ • ❳ 🄱🄾🅃 🄸🄽🄵🄾 ❲ • ❳
┃ ➣ Nama Bot : _*${botName}*_
┃ ➣ Nama Owner : _*${ownerName}*_
┃ ➣ Mode :  _*${banChats ? "Self" : "Public"}*_
┃ ➣ Runtime : _*${runTime}*_
┃ ➣ Prefix : _*( ${prefix} )*_
┗❒

${readmore}
┏❒❲ • ❳ 🄳🄾🅆🄽🄻🄾🄰🄳 🄼🄴🄽🅄 ❲ • ❳❒
┃ ➣ ${prefix+ 'ytmp4'}
┃ ➣ ${prefix+ 'ytmp3'}
┃ ➣ ${prefix+ 'tiktoknowm'}
┃ ➣ ${prefix+ 'tiktokdl'}
┗❒`
}

exports.imageMenu = (msg, prefix, botName, ownerName, runTime, readmore, banChats, SETTING) => {
return `┏❒❲ • ❳ 🅄🅂🄴🅁 🄸🄽🄵🄾 ❲ • ❳❒
┃ ➣ Username : _*@${msg.pushName}*_
┃ ➣ Link : _*wa.me/${msg.sender}*_
┗❒
    
┏❒❲ • ❳ 🄱🄾🅃 🄸🄽🄵🄾 ❲ • ❳
┃ ➣ Nama Bot : _*${botName}*_
┃ ➣ Nama Owner : _*${ownerName}*_
┃ ➣ Mode :  _*${banChats ? "Self" : "Public"}*_
┃ ➣ Runtime : _*${runTime}*_
┃ ➣ Prefix : _*( ${prefix} )*_
┗❒

${readmore}
┏❒❲ • ❳ 🄸🄼🄰🄶🄴 🄼🄴🄽🅄 ❲ • ❳❒
┃ ➣ ${prefix+ 'waifu'}
┃ ➣ ${prefix+ 'neko'}
┃ ➣ ${prefix+ 'awoo'}
┃ ➣ ${prefix+ 'megumin'}
┃ ➣ ${prefix+ 'shinobu'}
┗❒`
}

exports.rulesBot = () => {
return `

1. Jangan Spam Bot
Sanksi : *Warn/Soft Block*

2. Jangan Telepon Bot
Sanksi : *Soft Block*

3. Jangan Mengejek Bot
Sanksi : *Permanen Block*

Jika Sudah Paham Rules nya
Ketik #menu Untuk Memulai Bot`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})