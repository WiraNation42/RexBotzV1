const fs = require('fs');

exports.auto_BlockCaller = async (client, json) => {
  const user_Call = json.content[0].attrs['call-creator']
  client.sendMessage(user_Call, { text: 'Maaf Kamu Terdeteksi Telepon Bot!\n5 Detik Lagi Kamu Akan Diblokir Otomatis Oleh Bot.'})
    await sleep(5000)
  client.updateBlockStatus(user_Call, 'block')
}