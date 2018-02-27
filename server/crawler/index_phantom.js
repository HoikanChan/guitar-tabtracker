
const baseUrl = 'http://www.ccguitar.cn'
const target = 'http://www.ccguitar.cn/pu_list_0_0_0_0_0_'
const postFix = '.html'
let db = {}

const phantom = require('phantom');

(async function () {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  for (let i = 1; i < 2; i++) {
    const status = await page.open(baseUrl)
    const content = await page.property('content')
    const $ = cheerio.load(content, {decodeEntities: false})
    const trackUrls = []
    $('.puname a').each(function (i, ele) {
      const trackUrl = $(this).attr('href')
      console.log(trackUrl)
      if (!db[trackUrl]) db[trackUrl] = {}
      db[trackUrl].title = $(this).text()
      trackUrls.push(trackUrl)
    })
  }
  await instance.exit();
})();