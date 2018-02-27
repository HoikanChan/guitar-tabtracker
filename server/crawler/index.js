const http = require('http')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
// const Promise = require('bluebird')
const baseUrl = 'http://www.ccguitar.cn'
const target = 'http://www.ccguitar.cn/pu_list_0_0_0_0_0_'
const postFix = '.html'
const fs = require('fs');
let db = {}

function crawl (url, actionFn) {
  return new Promise((resolve, reject) => {
    try {
      http.get(url, res => {
        let chunks = []
        const { statusCode } = res
        if (statusCode !== 200) {
          reject('fail')
        }
        res.on('data', chunk => { 
          chunks.push(chunk)
        })
        res.on('end', function () {
          const html = iconv.decode(Buffer.concat(chunks), 'gb2312')
          const $ = cheerio.load(html, {decodeEntities: false})
          actionFn($, resolve)
        }).on('error', function (e) {
          console.log(e)
          reject(e)
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}

(async () => {
  for (let i = 1; i < 12; i++) {
    await crawl(target + i + postFix, function ($, resolve) {
      const trackUrls = []
      $('.puname a').each(function (i, ele) {
        const trackUrl = $(this).attr('href')
        if (!db[trackUrl]) db[trackUrl] = {}
        // db[trackUrl].title = $(this).text()
        db[trackUrl].pattern = '弹唱'
        if (/独奏|指弹/.test(db[trackUrl].title)) {
          db[trackUrl].pattern = '独奏'
        }
        trackUrls.push(trackUrl)
      })
      resolve(trackUrls)
    })
  }
  for (let url in db) {
    await crawl(baseUrl + url, function ($, resolve) {
      db[url].tab = []
      $('.swiper-slide img').each(function (i, ele) {
        const tab = $(this).attr('data-cfsrc')
        if (tab) {
          db[url].tab.push(baseUrl + $(this).attr('data-cfsrc'))
        }
      })
      $('#navigation p a').each(function (i) {
        if (i === 1) db[url].genre = $(this).text().trim()
        if (i === 2) db[url].artist = $(this).text().trim()
      })
      db[url].title = $('#navigation p').text().split('&gt;&gt;').slice(-1)[0].trim()
      db[url].tune = $('#wy_dafen').next().html().slice(-2, -1).trim()
      db[url].caps = $('#wy_dafen').next().next().html().slice(-3).trim()
      resolve('Ok!')
    })
  }
  console.log(db)
  const filestr = JSON.stringify(db)
  fs.writeFile('songs.json', filestr, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})()
