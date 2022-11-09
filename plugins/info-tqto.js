import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
       let nnn = `@${m.sender.replace(/@.+/, '')}`
       let hj = '0'
       let mek = '6281364444859'
       let k = `@${mek.split`@`[0]}`
       let akaa = `@${hj.split`@`[0]}`
       
  let mentionedJid = [m.sender]
let scnya = `⟥⟞⟚━┈┈ ❨ Hʏ ${nnn} ❩ ┈┈━⟚⟝⟤`
    let footerny = `Rᴇᴄᴏᴅᴇ Bʏ : ${nameown}
Wᴀ Owɴᴇʀ : ${nameown}
Sᴄ Bᴀsᴇ : YouTube KoncitOfc
Sᴄ Oʀɪ : ${k}
Mᴀʀᴋ Zᴜᴋᴇʙᴇʀɢ : ${akaa}
Mʏ Pʀᴏᴊᴇᴄᴛ : fix-bot-v3

⫹❰⫺ Bɪɢ Tʜᴀɴᴋs Tᴏ ⫹❱⫺
⭝ Aʟʟᴀʜ Yᴀɴɢ Mᴀʜᴀ Esᴀ
⭝ Oʀᴀɴɢ Tᴜᴀ
⭝ Tᴇᴍᴇɴ Gᴡ
⭝ Mᴀsᴛᴀʜ - Mᴀsᴛᴀʜ

*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
https://github.com/adiwajshing
*❉ Nurutomo:*
https://github.com/Nurutomo
*❉ Istikmal:* 
https://github.com/BochilGaming
*❉ Ariffb:*
https://github.com/Ariffb25
*❉ Ilman:*
https://github.com/ilmanhdyt
*❉ Amirul:*
https://github.com/amiruldev20
*❉ Rasel:*
https://github.com/raselcomel
*❉ Fatur:*
https://github.com/Ftwrr
*❉ Rominaru:*
https://github.com/Rominaru
*❉ Kannachann:*
https://github.com/Kannachann
*❉ The.sad.boy01:*
https://github.com/kangsad01
*❉ Ameliascrf:*
https://github.com/Ameliascrf
*❉ Fokus ID:*
https://github.com/Fokusdotid
*❉ Johannes:*
https://github.com/Johannes2803
*❉ BrunoSobrino:*
https://github.com/BrunoSobrino
*❉ Krisna:*
https://github.com/NevtBotz
*❉ LitRHap:*
https://github.com/LitRHap
*❉ Rlxfly:*
https://github.com/Rlxfly
*❉ Aine:*
https://github.com/Aiinne
*❉ Papah-Chan:*
https://github.com/FahriAdison
*❉ WH MDOS DEV:*
https://github.com/WH-MODS-BOT
*❉ ALDI:*
https://github.com/Hyuura-Official
*▸ - - - —「 Penulis Ulang 」— - - - ◂*
${namagithub}
${linkgithub}
https://github.com/Wahidhidayatulla
*▸ - - - —「 Thanks For Suhu 」— - - - ◂*
*❉ WH MODS DEV:*
*❉ Kannachan:*
*❉ Papah-Chan:*
*❉ Johannes:*
*❉ Krisna:*
*❉ Rlxfly:*
`
 conn.send3ButtonImg(m.chat, `https://i.ibb.co/vzrsS1w/thumbnail.jpg`, scnya, footerny, 'Menu', '.menu', 'Owner', '.owner', 'Sewa', '.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/k0nc1t.store',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler