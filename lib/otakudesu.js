const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const { fetchJson, fetchText } = require('./fetch')

const onGoing = async (p) => {
    const res = await axios.get(`https://otakudesu.moe/ongoing-anime`)
    const $ = cheerio.load(res.data)
    const result = []
    $('.venz').find('li > div.detpost').each(function(c, d) {
        const judul = $(d).find('div.thumb > a > div.thumbz > h2.jdlflm').text()
        const thumb = $(d).find('div.thumb > a > div.thumbz > img').text()
        const eps = $(d).find('div.epz').text()
        const hri = $(d).find('div.epztipe').text()
        const tgl = $(d).find('div.newnime').text()
        result.push({ judul, thumb, eps, hri, tgl })
    })
    return result
}

const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching Video...')
    fetchText('https://sansekai.my.id/sansekai.txt')
    	.then((result) => resolve(result))
    	.catch((err) => reject(err))
})

/** 
 * Get Random Dadu For Group Game xD
 * @returns {String}
*/
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get Sticker...')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/dadu')
    	.then((result) => resolve(result))
    	.catch((err) => reject(err))
})

exports.onGoing = onGoing
exports.dadu = dadu
exports.asupan = asupan