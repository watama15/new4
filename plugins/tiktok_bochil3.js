import fetch from 'node-fetch'
import axios from 'axios'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
 //   const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
let res = await tiktokdlv3(args[0])
    let { author: { nickname }, video, description } = res
    let url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`              *γ πΉ α΄ Ιͺ α΄ α΄ α΄ α΄ γ*
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
ββββββββββ βγ€βγ€ ββγ€ β·γ€β» ββββββββββ
*Nickname:* ${nickname}
*Description:* ${description}
_Β©KoncitOfcπ­_
`.trim(), m)
}
handler.help = ['ttkbocilteam3'].map(v => v + ' <url>')

handler.command = /^(ttkbocilteam3)$/i
export default handler
