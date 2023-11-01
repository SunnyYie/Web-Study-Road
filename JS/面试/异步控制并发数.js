function limitRequest(urls = [], limit = 5) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0

    const start = async () => {
      const url = urls.shift()
      if (url) {
        try {
          await axios.post(url)
          if (count == len - 1) {
            resolve()
          } else {
            count++
            start()
          }
        } catch (e) {
          count++
          start()
        }
      }
    }
    while (limit > 0) {
      start()
      limit -= 1
    }
  })
}

//
limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd'])
