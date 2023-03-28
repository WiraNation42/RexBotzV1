// Created By WiraNation420

const SETTING = require('./config')
const { Boom } = SETTING.modul.boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = SETTING.modul.baileys
const { color, bgcolor } = require('./color')
const { move } = require('./simple')
const path = SETTING.modul.path
const logg = (pino = SETTING.modul.pino);
const qrcode = SETTING.modul.qrcode
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./function')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.listJadibot instanceof Array) console.log()
else global.listJadibot = []

const jadibot = async (client, msg, from) => {
const { sendImage, sendMessage } = client;
const { reply, sender } = msg;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/${sender.split("@")[0]}`), logg({ level: "silent" }));
try {
async function start() {
	let { version, isLatest } = await fetchLatestBaileysVersion();
	const client = await makeWaSocket({
		auth: state,
		printQRInTerminal: true,
		browser: ['RexBotz-MD (Numpang)', "Chrome", "1.0.0"],
		logger: logg({ level: "silent" }),
		version,
	})
client.ev.on('messages.upsert', async ({ messages}) => {
	try {
		const msg = messages[0];
        if (!msg.message) return
            const from = msg.key.remoteJid
            const type = getContentType(msg.message)
            const textMessage = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
            move(client, msg, store)
        require('../message/msg.js')(msg, client, from, store)
	} catch (err) { console.log(err) }
})
store.bind(client.ev);
client.ev.on("creds.update", saveCreds);
client.ev.on("connection.update", async up => {
    const { lastDisconnect, connection } = up;
    if (connection == "conection") return
    if (connection) {
        if (connection != "connecting") console.log("Connecting To Jadibot...")
    }
    if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr, { scale: 0 }), `Scan QR Ini Untuk Menjadi Bot Sementara\n\n1. Klik Titik 3 Di Pojok Kanan Atas\n2. Klik Perangkat Tertaut\n3. Scan QR Ini \nQR Expired Dalam 30 Detik`, msg)
    console.log(connection)
    if (connection == "open") {
        client.id = client.decodeJid(client.user.id)
        client.time = Date.now()
        global.listJadibot.push(client)
        await reply(`*Connected To WhatsApp - Bot*\n\n*User :*\n _*ID : ${client.decodeJid(client.user.id)}*_`)
        let user = `${client.decodeJid(client.user.id)}`
        let txt = `*Terdeteksi Menumpang Menjadi Bot*\n\n_User : @${user.split("@")[0]}_`
        client.sendMessage('6285271588014@s.whatsapp.net', { text: txt, mentions : [user] })
    }
    if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
        if (reason === DisconnectReason.badSession) {
            console.log(`Bad Session File, Please Delete Session And Scan Again`); client.logout(); }
        else if (reason === DisconnectionReason.connectionClosed) {
            console.log("Connection Closed, Reconnecting..."); start(); }
        else if (reason === DisconnectReason.connectionLost) {
            console.log("Connection Lost From Server, Reconnecting..."); start(); }
        else if (reason === DisconnectReason.connectionReplaced) {
            console.log("Connection Replaced, Another New Session Opened, Please Close Current Session File"); client.logout(); }
        else if (reason === DisconnectReason.loggedOut) {
            console.log(`Device Logged Out, Please Scan Again And Run`); client.logout(); }
        else if (reason === DisconnectReason.restartRequired) {
            console.log("Restart Required, Restarting..."); start(); }
        else if (reason === DisconnectReason.timedOut) {
            console.log("Connection TimedOut, Reconnecting..."); start(); }
        else clietn.end(`Unknown DisconnectReason : ${reason}|${connection}`)
    }
})
client,decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
        return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
}

client.sendText = (jid, text, quoted = '', options) => client.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
	console.log(e)
}
}

module.exports = { jadibot, listJadibot }