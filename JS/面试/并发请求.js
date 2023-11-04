/**
 * 并发请求
 *  @param {string[]} urls 待请求的url数组
 *  @param {number} maxNum 最大并发数
 */

function concurRequest(urls, maxNum) {
  return new Promise((resolve, reject) => {
    if (urls.length === 0) resolve()
    let index = 0
    let count = 0
    const results = []
    async function request() {
      const i = index
      const url = urls[index]
      index++
      try {
        const resp = await fetch(url)
        results[i] = resp.json()
      } catch (err) {
        results[i] = err
      } finally {
        count++
        if (count === urls.length) {
          resolve(results)
        }
        if (index < urls.length) {
          request()
        }
      }
    }
    for (let i = 0; i < Math.min(maxNum, urls.length); i++) request()
  })
}
