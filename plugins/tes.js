const SETTING = require('../lib/config.js')
const { runtime } = require('../lib/function')
let speed = SETTING.modul.speed
let timestampe = speed();
let latensie = speed() - timestampe              


module.exports = {
    order: ['tes', 'ping'],
    exec: async (msg, client, from) => {
        await msg.reply(`RunTime = ${runtime(process.uptime())}\nKecepatan = ${latensie.toFixed(4)} detik`)
     }
}