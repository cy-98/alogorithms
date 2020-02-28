function Promise (executor) {
    const self = this

    this.status = 'pending'
    this.value = null
    this.reason = null // 储存异步结果

    this.onfulfilledCb = []
    this.onrejectedCb  = []  // then是通知resolve添加一个回调函数

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if(self.status === 'pendding') {
                self.value  = value
                self.status = 'fulfilled'
    
                self.onfulfilledCb.forEach(fn => fn(value))   // 链式调用then的时候 会触发多个resolve
            }
        }, 0)
    }
    function reject(reason) {
        setTimeout(() => {
            if(self.status === 'pendding') {
                self.reason = reason
                self.status = 'rejected'
    
                self.onrejectedCb.forEach(fn => fn(reason))
            }
        }, 0)
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e) // promise内部报错触发reject
    }
}

Promise.prototype.then = function(onfulfilled, onrejected){
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
    onrejected  = typeof onrejected  === 'function' ? onrejected : error => { throw error }
    
    let promsie2
    if(this.status === 'fulfilled') {
        return promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let result = onfulfilled(this.value)
                    resolve(result)
                } catch(e) {
                    reject(e)
                }
            });
        })
    }

    if(this.status === 'rejected') {
      return promise2 = new Promise((resolve, reject) => {
          try{
            let result = onfulfilled(this.value)
            resolve()
          } catch(e) {
              reject(e)
          }
      })
    }

    if(this.status === 'pendding') {
        // this.onfulfilledCb.push(onfulfilled)

        return promsie2 = new Promise((resolve, reject) => {
            this.onfulfilledCb.push(   // 如果是pendding 这个promise会添加一个函数闭包会调用之前的resolve
                () => {                // 在这个函数中会拿到上一个resolve的值
                    try { 
                        let result = onfulfilled(this.value)
                        resolve()
                    } catch(e) {
                        reject(e)
                    }
                }
            )
            this.onrejectedCb.push(
                () => {
                    try { 
                        let result = onrejected(this.reason)
                        resolve()
                    } catch(e) {
                        reject(e)
                    }
                }
            )
        })
        // this.onrejectedCb.push(onrejected)
    }

}
Promise.prototype.catch = function() {

}
