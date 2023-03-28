
  console.log('Starting...');
  const SETTING = require('./lib/config')
  const pino = SETTING.modul.pino
  const chalk = SETTING.modul.chalk
  const fs = SETTING.modul.fs
  const jimp = SETTING.modul.jimp  
  const path = SETTING.modul.path
  const figlet = SETTING.modul.figlet
  let { Boom } = SETTING.modul.boom  
  const time = SETTING.modul.time
  const moment = SETTING.modul.moment
  let { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, proto } = SETTING.modul.baileys
  const Time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
  const { groupResponse } = require('./lib/group/groupResponse.js')
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  const { welcomeJSON } = require('./storage_cabinets/D-B/fetchLocationJson.js')
  const { auto_BlockCaller } = require('./lib/Call_AutoBlock.js')
  
  // Detect Files
  const { color, bgcolor, ConsoleLog, biocolor } = require(SETTING.file.color)
  const { move } = require(SETTING.file.move)
   //detect
      require('./lib/PRECISAR/precisar')
      require('./lib/function')
      require('./lib/SCRAPER/ephoto')
      require('./lib/SCRAPER/removebg')
               //=======================================================//
                                        /* { function } */
               //=======================================================//
             const sleep = async (ms) => {
                return new Promise(resolve => setTimeout(resolve, ms))
             }   
             
         try{ 
function nocache(module, cb = () => { }) {
  console.log(`Module ${module} Sedang Mengalami Perubahan`)
  fs.watchFile(require.resolve(module), async () => {
     await uncache(require.resolve(module))
     cb(module)
  })
}

function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
          delete require.cache[require.resolve(module)]
          resolve()
    } catch (e) {
          reject(e)
    }
  })
}

function title() {
  console.clear()
  console.log(chalk.bold.green(figlet.textSync('RexBotz-MD', {
    font: 'Standard',
    horizontalLayout: 'default',
    width: 80,
    whitespaceBreak: false
  })))
  console.log(chalk.yellow(`\n${chalk.yellow('[ Created By WiraNation420 ]')}\n\n${chalk.red('RexBotz-MD')} : ${chalk.cyanBright('WhatsApp Bot Multi Device')}\n${chalk.red('Follow My Instagram')} : ${chalk.cyanBright('@ytmgtwira420')}\n${chalk.red('Chat Me On WhatsApp')} : ${chalk.cyanBright('+62 852-7158-8014')}\n${chalk.red('Donate')} : ${chalk.cyanBright('085271588014 (Gopay/Dana)')}\n`))
}
         async function operate () {         
              const { state, saveState } = useSingleFileAuthState(SETTING.sesionName + '.json');    
              let { version } = fetchLatestBaileysVersion()
              const client = makeWASocket({ 
                  logger: pino({ level: 'silent' }), 
                  printQRInTerminal: true, 
                  browser: ['RexBotz-MD','Firefox','1.0.0'], // Safari = Default || Chrome | Opera | FireFox
                  qrTimeout: 25000, // 25000 = 25 Detik
                  auth: state
        })
        title()

// === [ Detect ] === //
// Lib
nocache('./lib/function.js', module => console.log(chalk.greenBright(`[ ${SETTING.botname} ] `) + Time + chalk.cyanBright(` "${module}" Telah Di Update!`)))
nocache('./lib/config.js', module => console.log(chalk.greenBright(` [ ${SETTING.botname} ] `) + Time + chalk.cyanBright(` "${module}" Telah Di Update!`)))
// Message
nocache('./client.js', module => console.log(chalk.greenBright(` [ ${SETTING.botname} ] `) + Time + chalk.cyanBright(` "${module}" Telah Di Update!`)))
//
nocache('./index.js', module => console.log(chalk.greenBright(`[ ${SETTING.botname} ] `) + Time + chalk.cyanBright(` "${module}" Telah Di Update!`)))
              
                /** plugins **/
             let pluginFolder = path.join(__dirname, './plugins')
              let pluginFilter = filename => /\.js$/.test(filename)
              global.plugins = {}
              for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
               try {
                     global.plugins[filename] = require(path.join(pluginFolder, filename))
                } catch (e) {
                     console.log(e)
                     delete global.plugins[filename]
               }
             }
             console.log(Object.keys(global.plugins))
     
               //=======================================================//
                                        /* { client.ev.on } */
               //=======================================================//
               
               client.ev.on('connection.update', async (update) => {
                   let { Connecting } = require("./connection/systemConnext.js")        
                         Connecting({update, client, Boom, DisconnectReason, sleep, operate}) 
                })      

               //save session 
                 client.ev.on('creds.update', saveState);   
                 store.bind(client.ev) 
               
                 client.ev.on('messages.upsert', async ({ messages }) => {
                      const msg = messages[0]; 
                       if (!msg.message) return
                           const from = msg.key.remoteJid  
                           const type = getContentType(msg.message)
                           const textMessage = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
                          move(client, msg, store) 
                     require('./client.js')(msg, client, from, store) //client.sendPresenceUpdate('recording', from) 
                  })
                
                  client.ev.on('group-participants.update', async (update) =>{
                      const welcomeJson = welcomeJSON
                          if(!welcomeJson.includes(update.id)) return
                           groupResponse(client, update)
                      console.log(update)
                   })         
                  
  
         }
       //=======================================================//
                                 /* { starting } */
       //=======================================================//
        operate ()
      } catch (e) { console.log(chalk.red(e)) }
  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
process.on('uncaughtException', console.error)
