const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/WASI-TECH-BOT-V1";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/733b2d3b5f1d1e1aeec0f.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOMEWELCOM || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923192173398,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ＧＥＮＥＲＴＥＤ ＢＹ ＷＡＳＩ 🇵🇰",
 
  author : process.env.PACK_AUTHER|| "ＩＴＸ",
  packname: process.env.PACK_NAME || "ＷＡＳＩ♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜-𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝗪𝗔𝗦𝗜",

  sessionName:process.env.SESSION_ID || "SUHAIL_07_25_08_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9nVFdEYlZaVWlPL0hjZzJFQ3cvK0NVZGtoWkNFQmpkL0xLT0NHZTMxMFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNfRUx3TGQ3VDhlcUJ2bHVLOUJ2dkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzU4YzkzZmQtNzEyOC00N2RlLTg3MzgtOWI5Y2FmYzhmYTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDIwMixcbiAgICAgIDI0MixcbiAgICAgIDYxLFxuICAgICAgNDIsXG4gICAgICAyMTAsXG4gICAgICA3MCxcbiAgICAgIDE3MCxcbiAgICAgIDEyMyxcbiAgICAgIDc0LFxuICAgICAgMTIyLFxuICAgICAgMTIxLFxuICAgICAgMTI3LFxuICAgICAgODIsXG4gICAgICAxNDUsXG4gICAgICAxMTMsXG4gICAgICAyMTcsXG4gICAgICAxNDYsXG4gICAgICA1MyxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAyNDAsXG4gICAgICAyMjgsXG4gICAgICAyMTMsXG4gICAgICAxMTYsXG4gICAgICAxOTEsXG4gICAgICAxMTIsXG4gICAgICAxMjAsXG4gICAgICA4LFxuICAgICAgMTA4LFxuICAgICAgMTAsXG4gICAgICAxMjUsXG4gICAgICAxMzksXG4gICAgICA3LFxuICAgICAgMTA0LFxuICAgICAgMjMxLFxuICAgICAgMzcsXG4gICAgICAyMDcsXG4gICAgICAzNyxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQzTEVNRktMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NjQ4NjU3Mzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU3MTc4NzY2MTUxNzY4OjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3Y3Qwb1E2YmlydGdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTEtIV2NFczBBR1J0VFAwRzY5S2FTOFNlbDJOc0llYUZNZVlBS3N6L25BMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDU09uc0wybVpXU1Vwa0c0OGZzZHc3eWEvNkFrZWJ5TkI4MThVcU1lNEU2aXdIM2NHK0t2aXVLSHAwZ05qTDZPdHdmQzhodHYydisyb05VbG4vbDBDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqL2ppbU11NWJKS3g3NU1zbTd4R2ZRSFBodkFoTlc3VlF5ejFpWHdud1BIUHd4UTQ1WGlTOUNNdkhnMkdod0M1TGsyV3BtdWd1K3prVmpRU2hXVDJoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NjQ4NjU3Mzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0NTcwNzMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlFXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3ZGZ0NWoyZm9DMlpYSktHZVNTM1R5aUhwVnoydkN6QkNmM0JmajhTNlEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NjEwMjI3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0NTcwNzM4Mjk0XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "RybcWhfzZJ7Wd46dgGE21kLt",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "25",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "5c804a3fc8fb6ca21eeaecacf9935870",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
