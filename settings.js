//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your KANGO-XMD session id here; must start with KANGO~
KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkF6dkZOV1ZqOXFTdUZQZWdXYlh2VFRubHNVRFl2VDlDczZaSXVpTU9ucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmxWcG8rcXVJNjA1azNLcVhpUmVpZmNhU0o1L3hvOWQ1SDJBOFUvZnVqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S1cvbk1zRm4wcFRCSllVRTI4Q0R4V0VyQXlCaXVDd3RscDcyVkVGV2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bkM4RDI0NTBuZ3RLMkZnUUgzSEZtODlFcmlOY2w5bThDUS9lc3dESlU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJYkhuSE1mYUNFSHVUY2d4cVF4Z2xWdmYzVUZPbEFZbG9JZVZwNFg4Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp6RDRCSklISXBtbVBoUnV5YlBndjBqZ0gzRG9QVmNQc0xZaUlGZGZLbEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZoZlI5eldDcUZTT2I0b2EzTU1PVVJhUENCaEcxbSs4cFU3cGdrZGQyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTZtanYvN25MNDFPcURocVZITFgrdW9yR2cxN05JMjVCeWZvWFl5RmZuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Indqbmp2T1BOci9DNnNGckxMbWM1UXE0NG5MSldkaUpmYWx4RnpCdGlINmgzSUZzRW1yVFR2WFd4UzFIK2lsNzJvdnplMXpoV2pva3hJdWlweDdoQ0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6InhvaVhTUHVGMUxVdnJVTHBBVVM0RGYrNktMZXJUQXl3elRxQzBvQlJEc3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Nzc1MDMxNDAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzNFRTk2MENEMEE5N0U4NkIwQjkyMTdGQTFFQUMzNSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0ODQyMzY3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6dHJ1ZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUFRUUExYTlciLCJtZSI6eyJpZCI6IjI1NTc3NTAzMTQwMzo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM4MDYyMDE3NzQ0OTI3OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS1JqcXdCRU91Mnhja0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvNG9ITFdOZjkxK0xaNVJmSEUvV1FmZHV2dS9jc005bStSWDNEL1lxQzNJPSIsImFjY291bnRTaWduYXR1cmUiOiI1d0RjV2crbkZhZWJZZk5JU0pvYllwQUZxM0JTbHRTRmxpQXlOdzhjM05sYkdrdkUxc2xZejFGZGNkK3NPUTg5Q04xaEJYcjBRNmRTcEl1ZGtYTjRBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWjg0aHJCT1lnWkQ4cjhSUU0xSk5ON1RTSjRNMkx4YkVUejhMdm9odjNxSFJxTVZ5NndWLy9qVU1mdnpEZWxTbGZ2VmoxUTZSUmdTcnQ5V2M0NnJoQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzgwNjIwMTc3NDQ5Mjc6NEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU9LQnkxalgvZGZpMmVVWHh4UDFrSDNicjd2M0xEUFp2a1Y5dy8yS2d0eSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0ODQyMzYxLCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUErayJ9
//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
