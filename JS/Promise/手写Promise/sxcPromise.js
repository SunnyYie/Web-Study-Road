function sxcPromise(executor) {
  this.status = 'pending'
  this.result = undefined
  this.cb = []
  let _this = this

  function resolve(res) {
    if (_this.status !== 'pending') return
    _this.status = ' fulfilled'
    _this.result = res

    _this.cb.forEach((callback) => {
      callback.successCb && callback.successCb(_this.result)
    })
  }
  function reject(res) {
    if (_this.status !== 'pending') return
    _this.status = 'rejected'
    _this.result = res

    _this.cb.forEach((callback) => {
      callback.failCb && callback.failCbn(_this.result)
    })
  }
  executor(resolve, reject)
}

sxcPromise.prototype.then = function (successCb, failCb) {
  if (!successCb) {
    successCb = (res) => res
  }
  if (!failCb) {
    failCb = (error) => error
  }

  return new sxcPromise((resolve, reject) => {
    if (this.status === 'fulfilled') {
      let result = successCb && successCb(this.result)
      if (result instanceof sxcPromise) {
        result.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          },
        )
      } else {
        resolve(result)
      }
    }
    if (this.status === 'rejected') {
      let result = failCb && failCb(this.result)
      if (result instanceof sxcPromise) {
        result.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          },
        )
      } else {
        reject(result)
      }
    }
    if (this.status === 'pending') {
      this.cb.push({
        successCb: () => {
          let result = successCb(this.result)
          if (result instanceof sxcPromise) {
            result.then(
              (res) => {
                resolve(res)
              },
              (err) => {
                reject(err)
              },
            )
          } else {
            resolve(result)
          }
        },
        failCb: () => {
          let result = failCb(this.result)
          if (result instanceof sxcPromise) {
            result.then(
              (res) => {
                resolve(res)
              },
              (err) => {
                reject(err)
              },
            )
          } else {
            reject(result)
          }
        },
      })
    }
  })
}

sxcPromise.prototype.catch = function (failCb) {
  this.then(undefined, failCb)
}
