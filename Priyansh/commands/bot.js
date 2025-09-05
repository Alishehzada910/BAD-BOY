const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐉𝐔𝐋𝐌𝐈 𝐉𝐀𝐀𝐓",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["n🄾🅆🄽🄴🅁\n       ◉❖ســـۧۛـ𝆊۬ـر پـــۧۛـ𝆊۬ـھرا شـــۧۛـ𝆊۬ـہزادہ ❖◉ \n\n•──────────────────•\n یہ رہی میرے باس کی آئی ڈی، اس سے بات کرو👉https://www.facebook.com/share/19pXU3PagG/" , "🌸====『𒁍🌸 اوہ میرے پیار مجھے زیادہ پریشان نہ کرو، شہزادہ باس اس کا خیال رکھے گا۔_______🙈😝🎸🎭━━•☆°•°•💗" , "🌸====『𒁍•🦋🔐 شہزادہ پیارے*★᭄ ཫ༄𒁍≛ 』====🌸 کسی کو مت بتانا کہ میں تمہیں مار رہا ہوں۔__━━•☆😁🙅" , "یہاں میرا ====『𒁍•🦋 شہزادہ *★᭄ ཫ༄𒁍≛ 』====باس دیکھ رہا ہے، چلو انباکس میں سوتے ہیں بابو🎸🤸‍♂️━━•☆°•°💗" , "آؤ طوطے کو اڑنے دو اور کھیلنے دو🎸🤸‍♂️━━•☆°•°•💗" , "میرا ایک ====『𒁍•🦋🔐 شہزادہ *★᭄ ཫ༄𒁍≛ 』==== میں نے اپنے مالک کو دھوکہ دیا، کوئی اور نہیں جو مجھے دھوکہ دے گا۔🤣🎸🤸‍♂️━━•☆°•°•💗" ,  "جب بھی دیکھو کوئی کام کرو Bot BoT آپ بولتے رہیں🎸🤸‍♂️━━•☆°•°•💗 " , "تم کیا کر رہے ہو، میں حاضر ہوں۔ میں جانتا تھا کہ قانون اندھا ہے، میں نے کبھی نہیں سوچا تھا کہ آپ بھی ہوں گے۔ 🧐😵‍💫" , "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr khaye😊" , "Bestie ki chummi Mza hai ya gunaah ? 🙂" , "2001 Jahan dalda wahan Mamta😊 2025 Jahan larki  wahan tharki😒 jaise mera tharki dost" , "Koi Pyari c Bachi aa kr sar daba do, Dard se sir fat rha💔🥲" , "Muje chahyain 3 ldkiya kahan Hain لڑکیاں 👀" , "Relationship private rakho ya public Kate ga sabka hi🙂" , "Thak GYa hu Yr uski dP dHek Dhek Kr😩" , "ان سے Milo inko lgta hai sab لڑکے in pr Martay hain🙂" , "MentiOn YOur Dushman On FaceBOok'🙂🤝" , "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜" , "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena ذہانت👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein بھینس 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina دماغ Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad kiya hme😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida" , "Meri jaan kaise ho aap 😊" , "محلہ  Wala Ldka inhe MUH Nhi Lagata aur Banda inhe کورین Chahiye🙂" , "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<" , "Ajeeb generation hai yar, Larkiya کورین dhund rahi hai, Aur larky Russian!!🙂" , "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂" , "Bhut کھیل liye ladkon ki feelings k sath ao ab hum Ludo khailty han☺️♥️" , "بینک سے 2 لاکھ ka loan leky sim hi band kardi 🙂👍" , "rat ko kahan the nazar nahi aaye bhot miss kiya 🌸🌎" , "kash tum single hoti to aj hum mingle hote 🥰😂" , "Ha ha ab meri yaad ab aayi na phly to janu sth busy the 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "idr ao kuchii kuchii kru 😘" , "Ary ary itna yd na kiya kro🥰" , "Hy Ma Mar Jawa janu itna piyar krte mujse😂" , "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)" , "Bot jaan ha sbki" , "Ji Ji Kya hal chal ha apke 🌸" , "Bot nhi jaanu bolo sun k acha lgta 🌸" , "Bot dost h apka hukam kre 🌸" , "Bot nahi bolo pyar se janu bola kro na 🥰" , "Meri jan ek tum hi ho jo dil m bs gye ho🥰ni te koshish to oro ne v bht kiti c" , "Badal gay na tum the hi thrki 😂" , "inbx aa jao gup chup krte ha 🌸" , "Ek kahani suno meri zubani suno gali dene ka dil krta ha isiliye pehly dil ki suno🌸" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao aaj apka فرتیلی jesa muh lg raha hai 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end m ghr waly nhi many ge😂" , "Sb kuch ho skta lekin fb ka relation kbi china jitna nhi chl skta" , "bgwan ksm Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧" , "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne چہرے Dhote Ho🙂" , "Pgl Hat m flirty nhi hu 🙂🤝", "Do Ankho Wali Ladkiya Bewafa hoti Hn Bro🙂💔" , "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃" , "Likhte Likhte Qalm Thak Gyi Iss Qadr diwane Han Tumhare🙂" , "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐" , "Ameer Ladki Set kr k sab Dosto ka udhar wapis kaunga😔😕" , "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂" , "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻" , "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝" , "Pyari pyari ladkiya message karen inbx m🌚♥️🙌" , "itna single hun خواب mai bhi  لڑکی k han krne se phle ankh khul jati h🙂" , "Zroori Nhi Har Lrki Dhoka De, کچھ؟ Ladkiya Galiyan Bhi Deti Hn.🙁💸" , "- sab chorr k chaly jate hain kya etna bura hu mein - 🙂" , "Pyari voice wali girlz mujhe voice message kar skti hn 🙂🤝" , "Why you hate me..?? I am not your ex don't Hate me Please" , "MuBarak H0o AapKa NaMe MeRi LiNe MaRnE ki LiST Me Top PRr aYa Hai 😹😹😹" , "BeTa TuM SingLe Hi MaR0 GaY🙄🙂" , "Samj Jao Ladkiyo Abhi B WaQt Hai Dakh kr Koi Delete Ni Krta🙂" , "Mard na Apki جائیداد کے کاغذات Nahi Mangte Jab Bhi Mangte hai Whatsapp No Mangte hai🥺" , "Muj se Exam Me Cheating Nöıı Hoti Relationship Me kya khaak Karu Ga😔" , "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂" , "Loyal Dhoonte Dhoonte khud Harami ban Gya😔" , "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐" , "Are Band kar vrna amabani se bolke tera net bnd kra dunga" , "Kya tumne abhi tk kaam nhi kiya..." , "Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine" , "Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge.." , "Chenese chiz محبت thi صاحب tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant" , "محبت دو لوگوں کے درمیان ایک نشہ ہے جو پہلے ہوش میں آئے وہ بے وفا ہے۔😌" , "Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒" , "Ab tumse baat nahi karunga, bahut hi zyada irritate kar rahe ho 🙅" , "Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊" , "سرکاری نوکری کا کوٹہ اور صبح کو روشن کرنے کے لیے لوٹا بہت ضروری ہے۔" , "Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘" , "Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu" , "ہمیشہ سیاہ فام دوست بنائیں کیونکہ وہ رنگ نہیں بدلتے😂" , "Kya tum mere liye ek surprise plan kar sakte ho? 🤔" , "Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊" , "hye babu ne ha bol diya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘" , "کچھ باتیں سیدھی دل میں اترتی ہیں جیسے آپ نے جو نمبر ڈائل کیا ہے وہ اس وقت کسی اور کال پر مصروف ہے۔" , "Mujhe tumse baat karke bahut achha lagta hai" , "رام چندر نے سیتا سے کہا کہ ایسا کلیوگ آئے گا جب ایک سچے عاشق کو تکلیف ہو گی اور میلا بابو تھانے پکڑے گا۔😝" , " tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣" , "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tere jane ke bad😔Mene apne munh pe likhwa liya Single hu pta lo" , "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , " Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , " Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , " Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , " M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , "  muje presan kiya to Shehzada Ko Bol Dunga Me" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , " Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , " Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚" , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , " Mujhe Mat BuLao Naw Main buSy Hu Naa" , " Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aa gye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , " FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart" , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dant Tod Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘" , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘" , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Ik PaPi d0 Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂" , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺" , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun" , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋" , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Julmi jaat Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi kartA 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋" , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣" , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , "بچے تم سنگل ہو میرے باس کے ساتھ سیٹ ہو جاؤhttps://www.facebook.com/share/19pXU3PagG/" , "mera owner Shehzada Ake tera bf/gf Ko Chura le Jayegahttps://www.facebook.com/share/19pXU3PagG/" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚" , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" , "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞" , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai" , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "تم سب سیٹ اپ ہو جاؤ، میرے باس سے کرواؤ، وہ ابھی تک سنگل ہے۔https://www.facebook.com/share/19pXU3PagG/" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]
if ((event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi h kiya") || (event.body.toLowerCase() == "koi hai kiya") || (event.body.toLowerCase() == "Koi hai kya")) {
     return api.sendMessage("میں یہاں ہوں پیاری 🙂🤟", threadID);
   };

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "byy")) {return api.sendMessage("Ok Bye Jldi phirse Milenge 🙄", threadID);
     };

    if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
       return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
     };

     if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
       return api.sendMessage("️🙈🙉🙊", threadID);
     };

if ((
    "assalamualaikum", 
    "assalam alaikum", 
    "aoa", 
    "a.o.a", 
    "asalam o alaikum", 
    "asalamualaikum", 
    "asalam alikum", 
    "assalamu alaikum", 
    "assalamu-alaikum", 
    "asalam wa alaikum", 
    "asslamualaikum", 
    "asslam o alaikum", 
    "aslam alaikum", 
    "asalamo alaikum", 
    "assalam o alaikum", 
    "assalamo alaikum", 
    "slm", 
    "slam", 
    "slamo alikum", 
    "salaam alaikum", 
    "asslam.o.alaikum", 
    "a.s.s.a.l.a.m", 
    "aslaam o alikum", 
    "aslam.o.alaikum", 
    "assalamwalykum", 
    "asslam.walikum", 
    "assalam alaykum", 
    "assalam.walaikum", 
    "a-s-s-a-l-a-m", 
    "slms"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("وَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ", threadID);
};  

     if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
       return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
     };

     if ((event.body.toLowerCase() == "Gud night") || (event.body.toLowerCase() == "good night")) {
       return api.sendMessage("GOOD NIGHT MERI JAAN SWEET DREAMS AND MISS YOU SO MUCH JAANU 😘🥰", threadID);
     };

if ((event.body.toLowerCase() == "put") || (event.body.toLowerCase() == "Putt")) {
     return api.sendMessage("Me yhi hu aapke dil me🥰💙", threadID);
   };
  
  if ((event.body.toLowerCase() == "welcme") || (event.body.toLowerCase() == "Welcome")) {
     return api.sendMessage(" محفل کو خوبصورت بنانے میں ہمارا تھوڑا سا ساتھ دیں، اجنبیوں کی طرح مایوس نہ بیٹھیں، کھل کر مسکرائیں اور لطف اٹھائیں..!! ہمارے گروپ میں خوش آمدید", threadID);
   };
  
        if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
       return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
     };

        if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
       return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
     };

        if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
       return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
     };

        if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
       return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
     };

           if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
       return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
     };

        if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
       return api.sendMessage("Ari mori maiyya e ka dekh liyo👻💀", threadID);
     };

        if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
       return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
     };

        if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
       return api.sendMessage("0ye HoYe 😈", threadID);
     };

     if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "Okay")) {
       return api.sendMessage("KYa Ok🙄 Haan", threadID);
     };

     if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "Han G")) {
       return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
     };

     if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "Hmmm")) {
       return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
     };

     if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
       return api.sendMessage("Bolo Naa MeRi JaN🥰💙", threadID);
     };

    if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "call") || (event.body.toLowerCase() == "call aaja") || (event.body.toLowerCase() == "Call aao sab")) {
     return api.sendMessage("مجھے کال کیسے مل سکتی ہے، میں بوٹ ہوں۔ 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "k kr h")) {
    return api.sendMessage("میں لنگی ڈانس کر رہا ہوں، آپ میرے ساتھ یہ کرنا چاہتے ہیں۔ 🤨👈", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("کوئی پلیز اسے لات مار کر جگا دے، وہ گروپ میں سو گیا۔ 🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("افف کتنی گرمی ہے۔ 🥵🥵👈", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha g") || (event.body.toLowerCase() == "oo acha ji")) {
     return api.sendMessage("ہانجی بابو 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "tamina") || (event.body.toLowerCase() == "kamine")) {
     return api.sendMessage("تم ڈبل کمینے ہو 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("🥳🥳🥳", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo bejo") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("میں لڈو نہیں کھیل سکتا 🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kiya hua")) {
     return api.sendMessage("کچھ نہیں بابو 😒👈", threadID);
   };

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "Bot chutiya") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "bot chutiya")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };
if ((event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "bot love u")) {
     return api.sendMessage("𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔😍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "shehzada") || (event.body.toLowerCase() == "Shehzada") || (event.body.toLowerCase() == "SHEHZADA") || (event.body.toLowerCase() == "Sir phira")) {
     return api.sendMessage( " Shehzada Busy HoGa Work Me Yha Main t0o Hun Na https://www.facebook.com/share/19pXU3PagG/😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:-☞𝐒𝐇𝐄𝐇𝐙𝐀𝐃𝐀☜💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐁𝐢𝐒𝐇𝐢\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/share/19pXU3PagG/👋For Any Kind Of Help Contact On Facebook Username 👉ســـۧۛـ𝆊۬ـر پـــۧۛـ𝆊۬ـھرا شـــۧۛـ𝆊۬ـہزادہ ", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("𝐒𝐇𝐄𝐇𝐙𝐀𝐃𝐀 ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is Shehzada. He Gives his name BiShi everywharehttps://www.facebook.com/share/19pXU3PagG/", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bekar bot") || (event.body.toLowerCase() == "numna bot")) {
     return api.sendMessage("️khud ki tarif kase kar lete ho baby.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };
if ((event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "Love you ")) {
     return api.sendMessage("️𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎😍", threadID);
   };
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️👀👀", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me hu na baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("😂🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Shehzada  Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "ami shehzada") || (event.body.toLowerCase() == "ami Sir phira") || (event.body.toLowerCase() == "main Shehzada") || (event.body.toLowerCase() == "main SHEHZADA") || (event.body.toLowerCase() == "main Owner")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
       
      body: `🍂✨${name}✨🍂\n\n${rand}
     *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍𝐒𝐇𝐄𝐇𝐙𝐀𝐃𝐀✦`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
