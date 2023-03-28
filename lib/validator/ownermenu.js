const fs = require('fs')
const chalk = require('chalk')

exports.ownerMenu = (msg, prefix, botName, ownerName, runTime, sayingTime, latensi) => {
    return `${sayingTime}
┏❒❲ • ❳ 🅄🅂🄴🅁 🄸🄽🄵🄾 ❲ • ❳❒
┃ ➣ Username : _*@${msg.pushName}*_
┃ ➣ Link : _*wa.me/${msg.sender}*_
┗❒
  
┏❒❲ • ❳ 🄱🄾🅃 🄸🄽🄵🄾 ❲ • ❳
┃ ➣ Nama Bot : _*${SETTING.botname}*_
┃ ➣ Nama Owner : _*${SETTING.ownername}*_
┃ ➣ Mode :  _*${banChats ? "Self" : "Public"}*_
┃ ➣ Runtime : _*${runTime}*_
┃ ➣ Speed : _*${latensi.toFixed(4)}*_
┃ ➣ Prefix : _*( ${prefix} )*_
┃ ➣ Platform : _*${os.platform()}*_
┗❒

┏❒❲ • ❳ 🄾🅆🄽🄴🅁 🄼🄴🄽🅄 ❲ • ❳❒
┃ ➣ ${prefix + 'public'}
┃ ➣ ${prefix + 'self'}
┃ ➣ ${prefix + 'setppbot'}
┃ ➣ ${prefix + 'setthumb'}
┃ ➣ ${prefix + 'culik'}
┃ ➣ ${prefix + 'getcase'}
┃ ➣ ${prefix + 'ohidetag'}
┃ ➣ ${prefix + 'inspect'}
┗❒`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.yellow(`New ${__filename}`))
    delete require.cache[file]
    require(file)
})