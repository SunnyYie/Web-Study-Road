class MyPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = null
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []
    const that = this
    function resolve(value) {
      if (that.status === 'pending') {
        that.status = 'resolved'
        that.value = value
        that.fulfilledCallbacks.forEach((myFn) => myFn(that.value))
      }
    }
    function reject(value) {
      if (that.status === 'pending') {
        that.status = 'rejected'
        that.value = value
        that.fulfilledCallbacks.forEach((myFn) => myFn(that.value))
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === 'pending') {
      this.fulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      })
      this.rejectedCallbacks.push(() => {
        onRejected(this.value)
      })
    }
    if (this.status === 'resolved') {
      console.log('this', this)
      onFulfilled(this.value)
    }
    if (this.status === 'rejected') {
      onRejected(this.value)
    }
  }
}

function fn() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.6) {
        resolve(1)
      } else {
        reject(2)
      }
    }, 1000)
  })
}
fn.then(
  (res) => {
    console.log('res', res)
  },
  (err) => {
    console.log('err', err)
  },
)
