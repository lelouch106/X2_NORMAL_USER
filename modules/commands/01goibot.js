const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  prefix: 'awto',
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ericson",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Yah This Bot creator : Ericson Pascua => https://www.facebook.com/ericsonpascua6","ASSALA-MUA-LAIKUM ki korte pari apnar jnno"," ডাক দিয়েন নাহ আমি বিজি।","আমি বাংলাদেশ যাচ্ছি 🫣","এত্ত ডাকিস কেন বিয়ে করায় দিব","আমার বস আমাকে ঠিক করতেছে ডাক দিয়েন না।🥹","এত্ত বট বট কইরেন না হামিম কে বলে দিব আপনি খারাপ","আমার হামিমটা আসলেই ভালো","আহা জালাইও না আমাকে","এত্ত গ্রুপ এ আছি কেউ I Love you বলে নাহ","এই জীবন রেখে কি লাভ যদি আমার বস হামিম এর বিয়ে করায় দিতে না পারি","সব সময় ফাজলামি ভালো লাগে না","আমার বস হামীম এর গফ আছে।","আমাকে না ডাকি আমার বস হামীম এর সাথে তার গফ এর বিয়ে করায় দেন","আমিও বিদেশ যাব","তোমাকে আমার রাইতে ভালো লাগে","তোমার মনটা আমারে দিয়া দাও🙈","ভালবাসি তোমাকে","মেয়ে হইলে ইনবক্স এ চলে আসো গু","এত্ত ভালবাসা কই রাখি","বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ","শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺","etto jalaile Hamim ke bole diboh😒","এতো ডেকো না,প্রেম এ পরে যাবো তো🙈","Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋","বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑","হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?","এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬","I love you janu🥰","আরে Bolo আমার জান ,কেমন আছো?😚 ","Bot বলে অসম্মান করছি,😰😿","Hop beda😾,Boss বল boss😼","চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু","Bot না , জানু বল জানু 😘 ","বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে  আছি😋"," এতো ডাকিস কেন🤬","আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 ","আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒","হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘","দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣","তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ","আমাকে ডেকো না,আমি ব্যাস্ত আছি","কি হলো , মিস্টেক করচ্ছিস নাকি🤣","বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏","কালকে দেখা করিস তো একটু 😈","হা বলো, শুনছি আমি 😏","আর কত বার ডাকবি ,শুনছি তো","হুম বলো কি বলবে😒","বলো কি করতে পারি তোমার জন্য","আমি তো অন্ধ কিছু দেখি না🐸 😎" ,"Bot না জানু,বল 😌" , "বলো জানু 🌚","তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ 😇😘","jang hanga korba😒😬","হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে AMAR BOSS HAMIM ER SATEH TAR GF ER BIYE KORAI DAW 🙄" , "আমাকে এতো না ডেকে AMAR BOSS HAMIM RE CALL DAW CHOLE ASHBE 🙄" , " Don't Disturb ami Coxbazar jacchi" , "Ufff etto dako kn" , "tomar ghore bap vai nai?" , " Tomake i love you" , "cholo prem kori", "boin Hamim onek valo", " vai shodu shodu jalaw kn?", "cholo Chottogram jai", "cholo Dhaka jai", " amake valobaso?", "Valobashi tmk", " chipa teke bair hoiso", "miss koro amke?", " tomi ki amar hba?", "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", " কি গো সোনা আমাকে ডাকছ কেনো", "বার বার আমাকে ডাকস কেন😡","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱","হুম জান তোমার অইখানে উম্মমাহ😷😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে বস হামীমকে একটা গফ দে 🙄","jang hanga korba","jang bal falaba🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `╭──────•◈•──────╮\n         LELOUCHBOT        \n\n ❄️Dᴇᴀʀ, ${name}\n 💌:${rand} \n\n╰──────•◈•──────╯`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
