module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "SARDAR RDX",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/1XhB5fnQ/20250808-190722.jpg"];
var callback = () => api.sendMessage({body:`
╔════◇◆◇════╗
      🌟 𝗕𝗢𝗧 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 🌟
╚════◇◆◇════╝

🤖 𝗡𝗔𝗠𝗘: ${global.config.BOTNAME}
══════════════════

👑 𝗢𝗪𝗡𝗘𝗥: 『⸙』𝐒𝐇𝐄𝐇𝐙𝐀𝐃𝐀『⸙』
══════════════════

💬 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}
══════════════════

📌 𝗔𝗗𝗠𝗜𝗡: 𝐒𝐇𝐄𝐇𝐙𝐀𝐃𝐀 ✨
══════════════════

📲 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/share/19pXU3PagG/
══════════════════

💌 𝗖𝗢𝗡𝗧𝗔𝗖𝗧: ســـۧۛـ𝆊۬ـر پـــۧۛـ𝆊۬ـھرا شـــۧۛـ𝆊۬ـہزادہ  (Facebook)
══════════════════

📅 𝗧𝗢𝗗𝗔𝗬: ${juswa}
⏳ 𝗨𝗣𝗧𝗜𝗠𝗘: ${hours}:${minutes}:${seconds}
══════════════════

⚡ 𝗦𝗧𝗔𝗧𝗨𝗦: RUNNING SMOOTH ✅


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
   
